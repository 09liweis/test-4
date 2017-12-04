import Vue from 'vue';
import FileUploadApp from '../src/components/FileUploadApp.vue';
import DataTable from '../src/components/DataTable.vue';

describe('FileUploadApp.vue', () => {
    it('should have be an object', () => {
        expect(typeof FileUploadApp).toBe('object');
    });
    
    it('should have users empty', () => {
        const fileUpload = new Vue(FileUploadApp).$mount();
        expect(fileUpload.users.length).toBe(0);
    });
    
    it('should have default view', () => {
        const fileUpload = new Vue(FileUploadApp).$mount();
        expect(fileUpload.view).toBe('table');
    });
});

describe('DataTable.vue', () => {
    const dataTable = new Vue(DataTable).$mount();
    it('should have default sort key', () => {
        expect(dataTable.sortKey).toBe('id');
    });
    
    it('should have default sort direction', () => {
        expect(dataTable.reverse).toBe(false);
    });
    
    it('should change sort direction', () => {
        dataTable.sortBy('id');
        expect(dataTable.reverse).toBe(true);
    });
    
    it('should change sort key', () => {
        dataTable.sortBy('name');
        expect(dataTable.sortKey).toBe('name');
    });
})