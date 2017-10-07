let formId = 0;
let fieldId = 0;

export default {
	getNewFormId: () => {
		return formId++;
	},
	getNewFieldId: () => {
		return fieldId++;
	},
};
