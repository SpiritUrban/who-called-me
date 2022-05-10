const l = console.log;

/**
* the IE crutch - IE requires the Error to actually be throw  else is undefined.
*/
const ieCrutch = (err) => { try { throw err } catch (err) { return err } };

module.exports = (...commands) => {
    var err = new Error(); // err = a lot of text strings (stack)
    if (!err.stack) err = ieCrutch(err);
    if (!err.stack) return 0; // probably IE <10
    const stack = err.stack.toString().split(/\r\n|\n/); // convert text to array of text lines
    const nextLne = stack[2].trim();
    const whoDirty = nextLne.split(' ')[2];
    const whoDirty2 = whoDirty.substring(1, whoDirty.length-1);
    const whoDirty2Arr = whoDirty2.split(':');
    const who = whoDirty2Arr[0] + whoDirty2Arr[1];
    commands.forEach(command=>{
        if (command=='report') l('bunch:', { nextLne, stack });
    });
    return who;
};
