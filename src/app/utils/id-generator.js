let formId = 1;
let fieldId = 1;

export default {
	getNewFormId: () => {
		return formId++;
	},
	getNewFieldId: () => {
		return fieldId++;
	},
};
