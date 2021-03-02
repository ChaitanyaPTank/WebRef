In mongodb
    - collection is like tables in a relational DB.
    - Document is record in relational DB.

Query operators:
Comparison:
    - eq (equal)
    - ne (not equal)
    - gt (grater than)
    - gte (gretaer than or equal to)
    - lt (less than)
    - lte (less than or equa to)
    - in
    - nin (not in)
Logical:
    - and
    - or

In async operations, returns are probably the promise, and you should use 
await in async function

Modelling relatioships
- you have to tradeoff btween query performence and consistency 

- Using references (Noramalization): -> Gives Consistency
    let author = {
        name: "author" -> if name is changed then it will be reflected to all course which uses
                            the id of this course.
    }

    let course = {
        author: "id"
    }
    
- Using embaded documents (Denormalization): -> gives better query performence.
    let course = {
        author: {
            name: "author" -> author will be available in single query so no extra query will be 
                                required.
        }
    }

- Hybrid approach
let author = {
    name: "author"
    // 50 other properties.
}

let course = {
    author: {
        id: "ref"
        name: "author"
    }
}
