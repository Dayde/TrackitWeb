package com.no_ip.pierrrrrrrot

import grails.converters.JSON

class ProductController {

    def index() {
        render Product.findAll() as JSON
    }

    def show(String id) {
        render Product.findById(id) as JSON
    }

    def save(String id) {
        Product p = new Product(params.product)
        p.id = Product.count + 1
        p.save()
        render p as JSON
    }

    def delete(String id) {
        Product p = Product.findById(id)
        p.delete()
        index()
    }

    def update(String id) {
        Product p = Product.findById(id)
        p.properties = params.product
        p.save()
        render p as JSON
    }
}
