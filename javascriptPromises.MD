# Promises
In order to wait for all promises to execute before moving forward, use `Promise.all()` function.  
In order to execute a code in both error and success cases, use `finally()` function after the `Promise.all()`.  

## Example in action
`let array = [  
new Promise((resolve, reject)=>{setTimeout(()=>{console.debug('Resolve 1'); resolve()}, 1000)}),  
new Promise((resolve, reject)=>{setTimeout(()=>{reject(); console.debug('Resolve 2'); }, 1000)}),  
new Promise((resolve, reject)=>{setTimeout(()=>{console.debug('Resolve 3'); resolve()}, 1000)})];  
Promise.all(array).finally(()=>{console.log('All promises resolved!!')})`
