const slider = document.getElementById("slider")
const data = [{
    img: "./assets/img/slider/slider1.jpg",
    title: "Beauty Outfits",
    text: "Cho thuê trang phục và phụ kiện chuyên nghiệp."
},{
    img: "./assets/img/slider/slider6.jpg",
    title: "Beauty Outfits",
    text: "Thời trang cho mọi người - mặc là đẹp."
},{
    img: "./assets/img/slider/slider3.jpg",
    title: "Beauty Outfits",
    text: "Đảm bảo chất lượng, mẫu mã đẹp và giá cả phải chăng."
},{
    img: "./assets/img/slider/slider5.jpg",
    title: "Beauty Outfits",
    text: "Nhận giao hàng, nhận hàng tận nơi, có tính phí tùy theo khoảng cách."
}]
// Custom thì thêm trường vào data
const slideObj = new Slider(slider, {
    timeOut: 2000 // 2s
}, data)

slideObj.start()
