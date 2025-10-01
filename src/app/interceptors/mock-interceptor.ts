import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Product } from "../models/product.model";

export function mockInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    if (req.url.endsWith('api/Products') && req.method === 'GET') {
        const mockData: Product[] = [
            // { id: "1", name: "Product 1", price: 100, rating: 3 },
            // { id: "2", name: "Product 2", price: 200, rating: 3 },
            // { id: "3", name: "Product 2", price: 200, rating: 3 },
            // { id: "4", name: "Product 2", price: 200, rating: 3 },
            // { id: "5", name: "Product 2", price: 200, rating: 3 },
            // { id: "6", name: "Product 2", price: 200, rating: 3 }
        ];

        return of(new HttpResponse({ status: 200, body: mockData }));
    }

    return next(req);
}
