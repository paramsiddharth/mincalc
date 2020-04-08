window.onload = () => {
				var btnVal = setInterval(() => {
								if (document.getElementById('argu').textContent == '')
												document.getElementById('btn').textContent = 'Reset';
								else
												document.getElementById('btn').textContent = 'Calculate';
				},100);
}

const updateVal = () => {
				argy = document.getElementById('argu').textContent;
				valy = document.getElementById('valu');
				try {
        if (argy == '') {
            argy = '1+2';
        				document.getElementById('argu').textContent = argy;
    					}
        valy.textContent = new Function('return('+argy+')')();
    } catch (er) {
        valy.textContent = 'Invalid expression!';
    }
}
