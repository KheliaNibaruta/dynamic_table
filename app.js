  function create_tr(table_id) {
            let table_body = document.getElementById(table_id),
            first_tr = table_body.firstElementChild
            tr_clone = first_tr.cloneNode(true);

            table_body.append(tr_clone);

            clean_first_tr(table_body.firstElementChild);
        }

        function clean_first_tr(firstTr) {
            let children = firstTr.children;

            children = Array.isArray(children) ? children : Object.values(children);
            children.forEach(x => {

                if (x !== firstTr.lastElementChild)
                {
                    console.log(x.firstElementChild.value = '');
                }
            });
        }

        function remove_tr(This) {
            if(This.closest('tbody').childElementCount == 1)
            {
                alert("Vous ne pouvez pas effacer cette ligne.");
            }   
            else{
                This.closest('tr').remove();
            }

        }

        function openModal ()
        {
            document.querySelector('.overlay').style.display = 'block';
            document.querySelector('.modal').classList.add('modal--open');
        }

        function closeModal()
        {
            document.querySelector('.overlay').style.display = 'none';
            document.querySelector('.modal').classList.remove('modal--open');
        }

       

        function resizeCanvas()
        {
            let canvas = document.getElementById("signature-pad");
            let ratio = Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.getContext("2d").scale(ratio, ratio);
        }
        window.onresize = resizeCanvas;
        resizeCanvas();

        let signaturePad = new SignaturePad(canvas, {
            backgroundColor: 'rgba(250,250,250)'
        });

        document.getElementById("clear").addEventListener('click', function(){
            signaturePad.clear();
        })