import express from 'express';
import livrosRoutes from "./livrosRoutes.js";

function routes(app){
    app.use(express.json());
    app.use(livrosRoutes);
}

export default routes;