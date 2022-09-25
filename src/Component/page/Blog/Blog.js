import React from "react";

const Blog = () =>{
    return(
        <div className="pl-5">
            <div>
            <h2 className="mt-2 font-bold ">Difference between javascript and node js?</h2>
            <small>JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.</small>
            </div>
            <div>
                <h2 className="mt-2 font-bold">When should we use Nodejs and when should we use MongoDB?</h2>
                <small>There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database.</small>
            </div>
            <div>
                <h2 className="mt-2 font-bold">Differences between sql and nosql databases?</h2>
                <small>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</small>
            </div>
            <div>
                <h2 className="mt-2 font-bold">What is the purpose of jwt and how does it work?</h2>
                <small>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</small>
            </div>
        </div>
    );
};
export default Blog;