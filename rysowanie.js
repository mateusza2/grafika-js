function rysuj(){
    var cnv = document.querySelector("#c1")
    var ctx = cnv.getContext('2d')

    ctx.beginPath();
    ctx.lineWidth = 10
    ctx.strokeStyle = "#e22"
    ctx.moveTo( 350, 200 )
    ctx.lineTo( 700, 550 )
    ctx.stroke()

    ctx.beginPath();
    ctx.lineWidth = 5
    ctx.strokeStyle = "#33e"
    ctx.moveTo( 600, 400 )
    ctx.lineTo( 620, 350 )
    ctx.moveTo( 500, 120 )
    ctx.lineTo( 420, 90 )
    ctx.moveTo( 300, 80 )
    ctx.lineTo( 200, 100 )
    ctx.stroke()
    
    ctx.beginPath();
    ctx.lineWidth = 12
    ctx.strokeStyle = "#ee2"
    ctx.arc( 400, 300, 200, 0, 2 * Math.PI )
    ctx.stroke()

}