export const saveFilePromise = function(blob, name, type) {
    return new Promise((success, failure) => {
        Meteor.saveFile(blob, name, type, (error, response) => {
            if (error) {
                failure(error)
            }
            else {
                success(response)
            }
        })
    })
};
