import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadScriptsService {

  constructor() { }

  scripts = {

    // 'assets/vertical-responsive-menu.min.js': "assets/js/vertical-responsive-menu.min.js",
   
  }
  loadedScripts = {};

  async loadScript(name: string) {
    if (!this.loadedScripts[name]) {
      let body = document.getElementsByTagName("body")[0];
      let newScript = document.createElement('script')
      newScript.src = this.scripts[name];
      newScript.async = true;
      newScript.defer = true;
      await body.appendChild(newScript)
      this.loadedScripts[name] = newScript
      // console.log(newScript);

    } else {
      this.removeScript(name);
      this.loadScript(name);
    }
  }

  removeScript(name) {
    document.body.removeChild(this.loadedScripts[name]);
    delete this.loadedScripts[name]
  }

  loadAllScripts() {
    for (let script in this.scripts) {
      this.loadScript(script)
    }
  }
}
