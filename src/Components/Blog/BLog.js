import React from 'react';
import { Table } from 'react-bootstrap';

const BLog = () => {
    return (
        <div className='container my-2 p-2' style={{ maxWidth: "900px" }}>

            <h1 className='bebas'>Difference between SQL and NoSQL</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>SQL</th>
                        <th>NoSQL</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Databases are categorized as Relational Database Management System (RDBMS).</td>
                        <td>NoSQL databases are categorized as Non-relational or distributed database system</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>SQL databases display data in form of tables so it is known as table-based database.</td>
                        <td>NoSQL databases display data as collection of key-value pair, documents, graph databases or wide-column stores.</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>MySQL, Oracle, Sqlite, PostgreSQL and MS-SQL etc. are the example of SQL database. </td>

                        <td>MongoDB, BigTable, Redis, RavenDB, Cassandra, Hbase, Neo4j, CouchDB etc. are the example of nosql database</td>
                    </tr>
                </tbody>
            </Table>
            <h1 className='bebas my-2'>What is JWT, and how does it work?</h1>
            <p>JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
            </p>
            <h1 className='bebas my-2'>What is the difference between javascript and NodeJS?</h1>
            <p>JavaScript is a language, while Node.JS isn’t. It’s just an environment that runs JavaScript. Node JS is a V8 engine bundled with some libraries to do networking so that JavaScript can be used outside the browser.     </p>
            <h1 className='bebas my-2'>How does NodeJS handle multiple requests at the same time?</h1>
            <p>
                NodeJS internally manages a limited thread pool which handles multiple client requests based on which thread is avaiable in the pool to process the request.NodeJS server uses an EventQueue, which queues incoming client requests and an EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded and acts as a listener for the EventQueue which processes incoming requests based on FIFO policy.
            </p>
        </div>
    );
};

export default BLog;