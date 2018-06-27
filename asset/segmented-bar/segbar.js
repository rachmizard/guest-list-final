(function($) {
    const DEFAULT_WIDTH = "100%";
    const DEFAULT_HEIGHT = "80px";
    const palette = [
        '#C0392B', //Coklat//
        '#3A539B', //Biru Tua//
        '#26C281', //Hijau Muda //
        '#6BB9F0', //Biru Veri Muda//
        
        '#DB0A5B', //Pink//
        '#22A7F0', //Cyan//
        '#81CFE0', //Biru Muda//
        '#3A539B', //Biru Tua//
        '#F9BF3B', //Orange//
        '#E9D460', //Kuning Muda //
        '#E67E22', //Orange Tua//
        '#663399', //Ungu//
        '#913D88', //Ungu Tua//
        '#6C7A89', //Gray//
        '#F22613', //Merah//
        '#03A678', //Hijau Veri muda//
        '#FDE3A7', //Vanila//
        '#8E44AD', //Ungu Normal//
        '#D24D57', //Coklat muda//
        '#CF000F', //Coklat TUa//
        '#86E2D5', // Cyan 2//
        
        //PAKET PINK//
        '#b30059',
        '#cc0066',
        '#e60073',
        '#ff0080'
        //ENDED PAKET PINK//
    ];

    $.fn.segbar = function(options = []) {
        $(this).each(function makeSegBar(index, item) {
            //Get data from options array
            let currentOptions = options[index];
            if( !currentOptions.data || (currentOptions.data.length <= 0) ) {
                throw new Error(`No data provided for chart at position ${index}`);
            }
            constructBar(this, currentOptions);
        });
        return this;
    };

    function constructBar(element, options) {
        let percentages = getPercentages(options.data);

        for(let i=0; i<options.data.length; i++)  {
            options.data[i].percent = +percentages[i];
        }
        console.log(options.data);

        element.style.width = options.width ? options.width : DEFAULT_WIDTH;
        element.style.height = options.height ? options.height : DEFAULT_HEIGHT;
        element.classList.add('segbar');
        let colorIt = getNextColor();

        for(let item of options.data) {
            let div = document.createElement('div');

            //Prepare wrapper
            div.style.display = "inline-block";
            div.style.height = "100%";
            div.style.width = `${parseFloat(item.percent*100)}%`;
            div.style.backgroundColor = (item.color) ? item.color : colorIt.next().value;
            div.style.position = "relative";
            div.classList.add('item-wrapper');

            //Percentage span
            let span = document.createElement('span');
            span.textContent = `${prettifyPercentage(item.percent*100)} %`;
            span.style.color = "#252525";
            span.classList.add('item-percentage');

            //Title span
            if(item.title && item.title.length > 0) {
                let span = document.createElement('span');
                span.style.color = "white";
                span.textContent = item.title;
                span.classList.add('item-title');
                div.appendChild(span);
            }

            div.appendChild(span);
            element.appendChild(div);
        }
    }

    function prettifyPercentage(percentage) {
        let pretty = parseFloat(percentage).toFixed(2);
        let v = pretty.split('.');
        let final = 0;
        if(v[1]) {
            let digits = v[1].split('');
            if(digits[0] == 0 && digits[1] == 0) {
                final = parseFloat(`${v[0]}`);
            }
            else {
                final = pretty;
            }
        }
        else {
            final = parseFloat(v[0]);
        }
        return final;
    }

    //Accepts an array of chart data, returns an array of percentages
    function getPercentages(data) {
        let sum = getSum(data);

        return data.map(function (item) {
            return parseFloat(item.value / sum);
        });
    }

    //Accepts an array of chart data, returns the sum of all values
    function getSum(data) {
        return data.reduce(function (sum, item) {
            return sum + item.value;
        }, 0);
    }

    function* getNextColor() {
        let i = 0;
        while(true) {
            yield palette[i];
            i = (i + 1) % palette.length;
        }
    }

}(jQuery));