
export const isFormFilled = (formData : Object) => {
    return Object.values(formData).every(x => x != '');
}