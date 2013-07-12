import com.no_ip.pierrrrrrrot.Product
import grails.util.Environment

class BootStrap {

    def init = { servletContext ->
        if(Environment.getCurrent() == Environment.DEVELOPMENT) {
            Product p = new Product();
            p.barcode = "1"
            p.title = "Foo"
            p.info = "Zaza"
            p.save()
            Product p2 = new Product();
            p2.barcode = "2"
            p2.title = "FooBar"
            p2.info = ""
            p2.save()
        }
    }
    def destroy = {
    }
}
