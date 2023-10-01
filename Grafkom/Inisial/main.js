function main() {
    var canvas = document.getElementById("mycanvas");
    var gl = canvas.getContext("webgl")

    var vertex_buffer = gl.createBuffer();

    var vertices = [
        //A
                -0.7, -0.5,
                -0.4, 0.5,
                -0.4, 0.5,
                -0.1, -0.5,
                -0.8, -0.5,
                -0.5, 0.5,
                -0.5, 0.5,
                -0.2, -0.5,
                -0.45, 0.1,
                -0.4, -0.1,
                -0.4, -0.1,
                -0.5, -0.1,
                -0.525, -0.15,
                -0.4, -0.15,
                -0.4, -0.15,
                -0.3, -0.5,
        //S
                0.5, 0.5,
                0.1, 0.2,
                0.1, 0.2, 
                0.5, -0.2,
                0.5, -0.2,
                0.1, -0.5,
                0.5, 0.5,
                0.125, 0.325,
                0.1, -0.5,
                0.475, -0.325,
                0.475, -0.325,
                0.1, 0.2,
                0.125, 0.325,
                0.5, -0.2
                ];

    // Create a new buffer object
    var vertex_buffer = gl.createBuffer();

    // Bind an empty array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    
    // Pass the vertices data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    //Create a vertex&fragment shader object
    var VERTEX_SOURCE = document.getElementById("vertCode").textContent;
    var FRAGMENT_SOURCE = document.getElementById("fragCode").textContent;

    //Create a vertex shader object
    var vertShader = gl.createShader(gl.VERTEX_SHADER);

    //Attach vertex shader source code
    gl.shaderSource(vertShader, VERTEX_SOURCE);

    //Compile the vertex shader
    gl.compileShader(vertShader);

    // Create fragment shader object
    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);

    // Attach fragment shader source code
    gl.shaderSource(fragShader, FRAGMENT_SOURCE);

    // Compile the fragment shader
    gl.compileShader(fragShader);

    // Create a shader program object to store combined shader program
    var shaderProgram = gl.createProgram();

    // Attach a vertex shader
    gl.attachShader(shaderProgram, vertShader); 
    
    // Attach a fragment shader
    gl.attachShader(shaderProgram, fragShader);

    // Link both programs
    gl.linkProgram(shaderProgram);

    // Use the combined shader program object
    gl.useProgram(shaderProgram);

    var positionAttributeLocation = gl.getAttribLocation(shaderProgram, "coordinates");

    //Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    

    // //Get the attribute location
    // var coord = gl.getAttribLocation(shaderProgram, positionAttributeLocation);
    //Enable the attribute
    gl.enableVertexAttribArray(positionAttributeLocation);

    //point an attribute to the currently bound VBO
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);



    gl.clearColor(0.5, 0.5, 0.5, 0.9);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    gl.drawArrays(gl.LINES, 0, 30);
}

main();