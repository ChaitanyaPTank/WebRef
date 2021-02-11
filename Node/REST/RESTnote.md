REST = Representational state transfer


CRUD = {
    Creade,
    Read,
    Update,
    Delete
}

REST URL : https://vidly.com/api/customers => customers is endpoint of URL

HTTP Methods:
    GET
    POST
    PUT
    DELETE

Examples: 
    GET /api/customers => Should bring all customers from server.
    GET /api/customers/1 => Should bring customer with ID 1 from server.
    PUT /api/customer/1 => will update customer on ID 1 with given body.
    DELETE /api/customers/1 => will delete customer having id as 1.
    POST /api/customers => will add new customer in server customers list.


Installed express

Install nodemon

set PORT value by
    set PORT=5000

// port 3000 is hard coded and this will decided by environment while deployment
// and value 3000 should not work in while deployment to solve this and get the 
// value of port from the runtime we have to get by the method shown below
const port = process.env.PORT || 3000;

Route Parameters

// When the url is like https://url.com/customers?sotBy=Name
// we can use req.query to get query parameeters
// res.send(req.query);

Handling get requests

Handling Post requests

