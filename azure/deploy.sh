#!/bin/bash

# Backend Deployment
az webapp up --runtime "NODE|18-lts" -n personal-blog-backend -g MyResourceGroup -l "EastUS"

# Frontend Deployment
az webapp up --runtime "NODE|18-lts" -n personal-blog-frontend -g MyResourceGroup -l "EastUS"

echo "Deployment complete."
