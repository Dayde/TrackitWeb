package com.no_ip.pierrrrrrrot

class Product {

    String barcode

    String title

    String info

    static mapping = {
        id generator: 'increment'
        barcode index: 'barcode_idx'
    }

    static constraints = {
        barcode nullable: false, blank: false, unique: true
        title nullable: false, blank: false
    }
}
