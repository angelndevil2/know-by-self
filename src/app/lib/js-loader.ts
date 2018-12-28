import { Observable } from 'rxjs';

/**
 * js loader for dependency
 *
 * load js from given url and call callback when laoded.
 */
export class JsLoader {

    private isLoaded = false;
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    public onLoad(callback: () => any) {
        if (this.isLoaded) {
            callback();
            return;
        }
        this.load().subscribe(callback);
    }

    private load(): Observable<void> {
        return Observable.create((observer: any) => {
            const node = document.createElement('script');
            node.src = this.url;
            node.type = 'text/javascript';
            node.async = true;
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = () => {
                observer.next();
                this.isLoaded = true;
            };
        });
    }
}
