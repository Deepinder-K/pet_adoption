import React from "react";

function BreadCrumbAdmin({title}) {
    return (
        <div>
            {/* Breadcrumbs */}
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="jumbo-heading" data-aos="fade-up">
                        <h1>{title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Admin</li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* !BreadCrumbs */}
        </div>
    );
}

export default BreadCrumbAdmin;
