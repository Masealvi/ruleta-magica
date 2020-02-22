$encontrarVocales = {
    init: function () {
        $("button#btnGenerar").on("click", function () {
            var row = $("input#txtRow").val();
            var col = $("input#txtCol").val();
            var tbody = "<tbody>";
            for (var i = 0; i < row; i++) {
                tbody += "<tr>";
                for (var j = 0; j < col; j++) {
                    tbody += "<td>" + getLetter() + "</td>";
                }
                tbody += "</tr>";
            }
            tbody += "</tbody>";

            // generate table
            $("table#tbContenido").html(tbody);
        });

    },
    validar: function () {
        /* validar si es vocal */
        $("table#tbContenido").on("click", "td", function () {
            /*var $fila = $(this).parent().index();
             var $columna = $(this).index();
             console.log("f: " + $fila + " col: "+$columna)*/
            var value = $(this).text();
//            $("div.alert-manu").removeAttr("hidden");
            if (value === "A" || value === "E" || value === "I" ||
                    value === "O" || value === "U") {
                $("div.alert-manu").removeClass("alert-manu-fail");
                $("div.alert-manu").addClass("alert-manu-success");
                $("label#lblResultado").text("¡Correcto!");
                $(this).addClass("bg-orange");
            } else {
                $("label#lblResultado").text("'" + value + "' No es una vocal");
                $("div.alert-manu").removeClass("alert-manu-success");
                $("div.alert-manu").addClass("alert-manu-fail");
            }
        });
    }
};

$siguiendovocal = {
    init: function () {
        /* position images*/
        var $tab = $("table#tbContenido");
        var $pos = $tab.offset(); // obtener coordenadas
        //console.log($pos);
        //imagen: 3 filas y 3 columnas
        // ancho/alto: 40px -> css
        var totRows = $tab[0].rows.length - 3; // 3 filas
        var totCols = $tab[0].rows[0].cells.length - 3; // 3 columnas        
        // set coordenadas para imagenes
        $("div.figura1").offset({top: $pos.top, left: $pos.left})
        $("div.figura2").offset({top: $pos.top + (totRows * 40), left: $pos.left + (totCols * 40)})

        /* Validar camino */
        $tab.on("click", "td", function () {
            var $vocal = $("input#txtVocal"); // vocal a seguir
            var rowActive = $vocal.attr("data-row");
            var colActive = $vocal.attr("data-col");
            // Coordenadas actuales
            var rowCurrent = $(this).parent().index();
            var colCurrent = $(this).index();

            console.log("active: ", rowActive, colActive, "current: ", rowCurrent, colCurrent);

            var value = $(this).text();
            var ok = false; // success or fail
            // misma vocal
            if (value === $vocal.val()) {
                // search camino
                var difRow = Math.abs(rowActive - rowCurrent);
                var difCol = Math.abs(colActive - colCurrent);
                if ((difRow === 1 || difRow === 0) && (difCol === 1 || difCol === 0)) {
                    ok = true;
                    $vocal.attr("data-row", rowCurrent);
                    $vocal.attr("data-col", colCurrent);
                }
            }
            // set alert
            if (ok) {
                $("div.alert-manu").removeClass("alert-manu-fail");
                $("div.alert-manu").addClass("alert-manu-success");
                $("label#lblResultado").text("Camino correcto");
                $(this).addClass("bg-orange");
            } else {
                $("label#lblResultado").text("Camino incorrecto");
                $("div.alert-manu").removeClass("alert-manu-success");
                $("div.alert-manu").addClass("alert-manu-fail");
            }
        });
    }
};
$siguiendovocales = {
    init: function () {
        /* position images*/
        var $tab = $("table#tbContenido");
        var $pos = $tab.offset(); // obtener coordenadas
        //console.log($pos);
        //imagen: 3 filas y 3 columnas
        // ancho/alto: 40px -> css
        var totRows = $tab[0].rows.length - 3; // 3 filas
        var totCols = $tab[0].rows[0].cells.length - 3; // 3 columnas        
        // set coordenadas para imagenes
        $("div.figura1").offset({top: $pos.top, left: $pos.left})
        $("div.figura2").offset({top: $pos.top + (totRows * 40), left: $pos.left + (totCols * 40)})

        /* Validar camino */
        $tab.on("click", "td", function () {
            var $vocal = $("input#txtVocal"); // vocal a seguir
            var rowActive = $vocal.attr("data-row");
            var colActive = $vocal.attr("data-col");
            // Coordenadas actuales
            var rowCurrent = $(this).parent().index();
            var colCurrent = $(this).index();

            console.log("active: ", rowActive, colActive, "current: ", rowCurrent, colCurrent);

            var value = $(this).text();
            var ok = false; // success or fail
            // siguiendo vocales
            if (value === "A" || value === "E" || value === "I" ||
                    value === "O" || value === "U") {
                // search camino
                var difRow = Math.abs(rowActive - rowCurrent);
                var difCol = Math.abs(colActive - colCurrent);
                if ((difRow === 1 || difRow === 0) && (difCol === 1 || difCol === 0)) {
                    ok = true;
                    $vocal.attr("data-row", rowCurrent);
                    $vocal.attr("data-col", colCurrent);
                }
            }
            // set alert
            if (ok) {
                $("div.alert-manu").removeClass("alert-manu-fail");
                $("div.alert-manu").addClass("alert-manu-success");
                $("label#lblResultado").text("Camino correcto");
                $(this).addClass("bg-orange");
            } else {
                $("label#lblResultado").text("Camino incorrecto");
                $("div.alert-manu").removeClass("alert-manu-success");
                $("div.alert-manu").addClass("alert-manu-fail");
            }
        });
    }
};
/* funciones comunes */
function getLetter() {
    var abc = "ABCDEFGHIJLMNÑOPQRSTUVWXYZ";
    var num = Math.floor(Math.random() * abc.length);
    return abc.substring(num, num + 1);
}
function getVocals() {
    var abc = "AEIOU";
    var num = Math.floor(Math.random() * abc.length);
    return abc.substring(num, num + 1);
}

//function json() {
//
//    // array asociativos / JSON / XML
//    // {"clave": "valor", "clave": "valor"};
//    var lPersona = {
//        "datos": {
//            "nombre": "Manuel",
//            "apPaterno": "Alberca",
//            "apMaterno": "Vilchez"
//        },
//        "edad": 26,
//        "gustos": {
//            "musica": "",
//            "deporte": {}
//        }
//    };
//    var nombre = lPersona.datos.apMaterno;
//    var apPaterno = lPersona.datos.apPaterno;
//    var apMaterno = lPersona.datos.nombre;
//
//    console.log(apPaterno, apMaterno, nombre);
//}