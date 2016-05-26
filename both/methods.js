if (Meteor.isServer) {
    Meteor.methods({
        insertApplication: function(obj) {
            if (Counters.find({}).fetch().length === 0) {
                setCounter("counters", "currentId", 10000);
            }
            var newId = incrementCounter("counters", "currentId");

            obj._id = newId.toString();
            obj.dataEntered = new Date();

            Applications.insert(obj);

            return newId;

        },
        saveFile: function(blob, name, type, path, encoding) {
            return Files.insert({name: cleanName(name), type: type, blob: blob});
            // var path = cleanPath(path),
            //     fs = __meteor_bootstrap__.require('fs'),
            //     name = cleanName(name || 'file'),
            //     encoding = encoding || 'binary',
            //     chroot = Meteor.chroot || 'public';
            // // Clean up the path. Remove any initial and final '/' -we prefix them-,
            // // any sort of attempt to go to the parent directory '..' and any empty directories in
            // // between '/////' - which may happen after removing '..'
            // path = chroot + (path ? '/' + path + '/' : '/');
            //
            // // TODO Add file existance checks, etc...
            // fs.writeFile(path + name, blob, encoding, function(err) {
            //     if (err) {
            //         throw (new Meteor.Error(500, 'Failed to save file.', err));
            //     } else {
            //         console.log('The file ' + name + ' (' + encoding + ') was saved to ' + path);
            //     }
            // });

            function cleanPath(str) {
                if (str) {
                    return str.replace(/\.\./g, '').replace(/\/+/g, '').
                    replace(/^\/+/, '').replace(/\/+$/, '');
                }
            }

            function cleanName(str) {
                return str.replace(/\.\./g, '').replace(/\//g, '');
            }
        },
        getFile: function(id) {
            return Files.findOne(id);
        }
    });
}
