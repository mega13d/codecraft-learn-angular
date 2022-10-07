import {Directive, ElementRef} from '@angular/core';
import * as hljs from 'highlight.js/lib/highlight.js'
import * as javascript from 'highlight.js/lib/languages/javascript';
import * as xml from 'highlight.js/lib/languages/xml';

@Directive({
  selector: 'pre[highlight]'
})
export class HighlightDirective {

  constructor(private elRef:ElementRef) {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('xml', xml);
    hljs.registerLanguage('html', xml);
    hljs.initHighlightingOnLoad();
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.elRef.nativeElement)
  }

}
