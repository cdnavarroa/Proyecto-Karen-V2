import React from "react";

const CompNavbar = () => {
  return (
    <div className="colornav">
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4  border-radius-xl">
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm">
                <a className="opacity-5 text-dark" href="javascript:;">
                  Pagina
                </a>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                Aprendices
              </li>
            </ol>
          </nav>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="buscar"
                placeholder="buscar"
                aria-label="buscar"
              />
              <button className="btn btn-outline-success" type="submit">
                buscar
              </button>

              <li class="nav-item d-flex align-items-center">
                <a
                  href="../pages/perfil.html"
                  class="nav-link text-body font-weight-bold px-0"
                >
                  <i class="fa fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none">Perfil</span>
                </a>
                
              </li>
              <button className="btn btn-outline-success" type="submit">
                Crear
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CompNavbar;
