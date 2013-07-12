import com.no_ip.pierrrrrrrot.Product

class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

        // REST
        "/api/product"(controller: 'product', action: 'index')
        "/api/product/$id?"(resource: 'product')

		"/"(view:"/index")
		"500"(view:'/error')
	}
}
