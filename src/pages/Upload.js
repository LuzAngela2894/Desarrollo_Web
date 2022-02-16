import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { Tooltip } from 'primereact/tooltip';
import { Toast } from 'primereact/toast';
import UploadService from '../service/UploadService';

import 'react-toastify/dist/ReactToastify.css';

export class Upload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            selectedProducts: [],
            importedData: [],
            selectedImportedData: [],
            importedCols: [{ field: '', header: 'Header' }]
        };

        this.importCSV = this.importCSV.bind(this);
        this.onImportSelectionChange = this.onImportSelectionChange.bind(this);
        this.clear = this.clear.bind(this);

        this.exportCSV = this.exportCSV.bind(this);
        this.onSelectionChange = this.onSelectionChange.bind(this);

        this.uploadService = new UploadService();

        this.cols = [
            { field: 'Codigo', header: 'codigoproducto' },
            { field: 'Nombre', header: 'nombrepoducto' },
            { field: 'NIT', header: 'nitproveedor' },
            { field: 'Precio Compra', header: 'preciocompra' },
            { field: 'IVA Compra', header: 'ivacompra' },
            { field: 'Precio Venta', header: 'precioventa' }
        ];

        this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
    }

    componentDidMount() {
        this.uploadService.single().then(data => this.setState({ products: data }));
    }

    importCSV(e) {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split('\n');

            // Prepare DataTable
            const cols = data[0].replace(/['"]+/g, '').split(',');
            data.shift();

            let importedCols = cols.map(col => ({ field: col, header: this.toCapitalize(col.replace(/['"]+/g, '')) }));
            let importedData = data.map(d => {
                d = d.split(',');
                return cols.reduce((obj, c, i) => {
                    obj[c] = d[i].replace(/['"]+/g, '');
                    return obj;
                }, {});
            });

            this.setState({
                importedCols,
                importedData
            });
        };

        reader.readAsText(file, 'UTF-8');
    }

    exportCSV(selectionOnly) {
        this.dt.exportCSV({ selectionOnly });
    }

    toCapitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    clear() {
        this.setState({
            importedData: [],
            selectedImportedData: [],
            importedCols: [{ field: '', header: 'Header' }]
        });
    }

    onImportSelectionChange(e) {
        this.setState({ selectedImportedData: e.value }, () => {
            const detail = this.state.selectedImportedData.map(d => Object.values(d)[0]).join(', ');
            this.toast.show({ severity: 'info', summary: 'Data Selected', detail, life: 3000 });
        });
    }

    onSelectionChange(e) {
        this.setState({ selectedProducts: e.value });
    }

    render() {
        const header = (
            <div className="p-d-flex p-ai-center export-buttons">
                <Button type="button" icon="pi pi-file" onClick={() => this.exportCSV(false)} className="p-mr-2" data-pr-tooltip="CSV" />
                <Button type="button" icon="pi pi-filter" onClick={() => this.exportCSV(true)} className="p-button-info p-ml-auto" data-pr-tooltip="Selection Only" />
            </div>
        );

        return (
            <div>
                <div className="card">
                    <h5>Import</h5>

                    <Toast ref={(el) => this.toast = el} />

                    <div className="p-d-flex p-ai-center p-py-2">
                        <FileUpload chooseOptions={{ label: 'CSV', icon: 'pi pi-file' }} mode="basic" name="demo[]" auto url="https://primefaces.org/primereact/showcase/upload.php" accept=".csv" className="p-mr-2" onUpload={this.importCSV} />
                        <Button type="button" label="Clear" icon="pi pi-times" onClick={this.clear} className="p-button-info p-ml-auto" />
                    </div>

                    <DataTable value={this.state.importedData} emptyMessage="No data" paginator rows={10} alwaysShowPaginator={false} responsiveLayout="scroll"
                        selectionMode="multiple" selection={this.state.selectedImportedData} onSelectionChange={this.onImportSelectionChange}>
                        {
                            this.state.importedCols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                </div>

                <div className="card">
                    <h5>Export</h5>

                    <Tooltip target=".export-buttons>button" position="bottom" />

                    <DataTable ref={(el) => { this.dt = el; }} value={this.state.products} header={header} dataKey="id" responsiveLayout="scroll"
                        selectionMode="multiple" selection={this.state.selectedProducts} onSelectionChange={this.onSelectionChange}>
                        {
                            this.cols.map((col, index) => <Column key={index} field={col.field} header={col.header} />)
                        }
                    </DataTable>
                </div>
            </div>
        );
    }
}