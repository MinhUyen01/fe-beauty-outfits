class Slider {
    dom = null
    config = {}
    data = []
    timmer = null
    currentSlide = 0
    constructor (dom, config, data) {
        this.dom = dom
        this.config = config
        this.data = data
        this.render()
    }

    render () {
        // Create vitual dom
        const dom = this.dom
        const container = document.createElement("div")
        container.classList.add("slider-intro")

        const wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")

        this.data.forEach(item => {
            const wrapperItem = document.createElement("div")
            wrapperItem.classList.add("wrapper-item")
            wrapperItem.style.backgroundImage = `url(${item.img})` // Set image background

            const contentItem = document.createElement("div")
            contentItem.classList.add("wrapper-content")
            wrapperItem.appendChild(contentItem)

            // Title
            const title = document.createElement("div")
            title.classList.add("slider__text-heading-intro")
            title.textContent = item.title
            contentItem.appendChild(title)
            
            // Text body 
            const text = document.createElement("div")
            text.classList.add("slider__text-description-intro")
            text.textContent = item.text
            contentItem.appendChild(text)

            wrapper.appendChild(wrapperItem)
        });

        // Render arrows

        const prevBtn = document.createElement("div")
        prevBtn.classList.add("slider-btn-prev")
        prevBtn.innerHTML = '<i class="fa-solid fa-angle-left"></i>'
        // Add event click to prev button

        prevBtn.addEventListener("click", () => {
            // Hanlder here
            this.prev()
            this.refresh()
        })
        
        const nextBtn = document.createElement("div")
        nextBtn.classList.add("slider-btn-next")
        nextBtn.innerHTML = '<i class="fa-solid fa-angle-right"></i>'
         // Add event click to nextBtn button

        nextBtn.addEventListener("click", () => {
            this.next()
            this.refresh()
        })

        container.appendChild(wrapper)
        container.appendChild(prevBtn)
        container.appendChild(nextBtn)

        dom.appendChild(container)
    }

    start () {
        this.refresh()
    }

    refresh () {
        if(this.timmer) {
            clearInterval(this.timmer)
        }
        const { timeOut } = this.config
        this.timmer = setInterval(() => {
            this.next()
        }, timeOut)
    }

    stop () {
        clearInterval(this.timmer)
        this.timmer = null
    }

    next () {
        const wrapper = this.dom.querySelector(".wrapper")
        // Caculate width of slide item
        const wrapperItems = wrapper.querySelectorAll('.wrapper-item')
        let widthTranform = 0
        if(this.currentSlide < this.data.length - 1) {
            for (let i = 0; i <= this.currentSlide; i++) {
                widthTranform += wrapperItems[i].offsetWidth
            }
            ++this.currentSlide
        }
        else {
            this.currentSlide = 0
        }
        wrapper.setAttribute('style', `transform: translateX(-${widthTranform}px)`)
    }

    prev () {
        const wrapper = this.dom.querySelector(".wrapper")
        // Caculate width of slide item
        const wrapperItems = wrapper.querySelectorAll('.wrapper-item')
        let widthTranform = 0
        if(this.currentSlide >= 0) {
            --this.currentSlide
        }
        else {
            this.currentSlide = this.data.length - 1 - 1
        }
        for (let i = 0; i <= this.currentSlide; i++) {
            widthTranform += wrapperItems[i].offsetWidth
        }
        wrapper.setAttribute('style', `transform: translateX(-${widthTranform}px)`)
    }
}

