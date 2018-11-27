import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw'

export class ErrorHandler {

    static handlerError(error: Response | any) {
        let errorMenssage: string
        
        if(error instanceof Response) {
            errorMenssage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
        } else {
            errorMenssage = error.toString();
        }

        return Observable.throw(errorMenssage);
    }
}