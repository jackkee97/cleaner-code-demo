function remappingInCallback(entry) {
    return mapping(entry, getPrice);
}

function getPrice(data) {
    return data.price;
}

function mapping(source, callback) {
    let results = [];
    source.forEach(element => {
        results.push(callback(element));
    });
    return results;
}

module.exports = remappingInCallback;