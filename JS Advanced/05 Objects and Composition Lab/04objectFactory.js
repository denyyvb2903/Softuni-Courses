function objectFactory(library, orders) {
    let results = [];
    for (const order of orders) {
        let template = order.template;
        let obj = Object.assign({}, template);
        let parts = order.parts;
        for (const methodName of order.parts) {
            obj[methodName] = library[methodName];
        }
        results.push(obj)
    }
    return results;
}
objectFactory();