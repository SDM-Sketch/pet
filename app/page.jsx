"use client";

import { useEffect, useMemo, useState } from "react";

const services = [
  {
    icon: "B",
    title: "基础洗澡",
    description: "温和清洁、耳眼护理、足底修毛、指甲修剪、吹干梳通。"
  },
  {
    icon: "S",
    title: "美容造型",
    description: "犬种标准造型、圆脸泰迪修剪、局部精修与季节短剪。"
  },
  {
    icon: "C",
    title: "皮毛养护",
    description: "去浮毛、毛结处理、滋养护理、敏感皮肤低刺激方案。"
  },
  {
    icon: "H",
    title: "猫咪专护",
    description: "低噪吹风、分段安抚、短时护理，降低紧张和环境压力。"
  }
];

const processSteps = [
  {
    number: "01",
    title: "到店评估",
    description: "确认体重、毛量、皮肤、耳道与情绪状态，沟通护理重点。"
  },
  {
    number: "02",
    title: "分区清洁",
    description: "使用适配洗护产品，按面部、躯干、四肢和尾部顺序处理。"
  },
  {
    number: "03",
    title: "吹护梳理",
    description: "低温分层吹干，检查毛结与潮湿部位，减少皮肤闷热。"
  },
  {
    number: "04",
    title: "交付反馈",
    description: "说明护理结果、异常观察与居家梳毛建议，支持下次记录。"
  }
];

const priceCards = [
  {
    title: "日常清爽",
    description: "适合短毛或定期护理宠物",
    price: "68",
    items: ["基础沐浴与吹干", "耳眼清洁", "指甲与足底护理"]
  },
  {
    title: "精致洗护",
    description: "适合中长毛、换毛期宠物",
    price: "128",
    featured: true,
    items: ["深层清洁与护毛", "去浮毛与毛结梳理", "护理前后状态记录"]
  },
  {
    title: "造型焕新",
    description: "适合需要修剪造型的犬猫",
    price: "198",
    items: ["洗护加全身修剪", "脸部与尾部精修", "造型维护建议"]
  }
];

const gallerySlides = [
  {
    image: "/assets/cn-store-reception.png",
    alt: "中国社区宠物洗护店前台接待区",
    title: "中式社区前台",
    description: "温润木质柜台、玉绿色墙面和整洁陈列，让第一次到店就更安心。"
  },
  {
    image: "/assets/cn-store-grooming.png",
    alt: "中国宠物洗护店专业洗护间",
    title: "专业洗护间",
    description: "白瓷砖、不锈钢浴池和分区用品，让清洁过程看得见也更放心。"
  },
  {
    image: "/assets/cn-store-lounge.png",
    alt: "中国宠物洗护店等待休息区",
    title: "等候休息区",
    description: "木格栅、暖光和舒适坐席，给主人与宠物一个放松的等待角落。"
  }
];

const testimonials = [
  {
    name: "林女士",
    pet: "比熊 · 奶油",
    rating: "5.0",
    text: "第一次带奶油来洗护，美容师会先检查皮肤和耳朵，过程也一直告诉我进度。回家后毛很蓬松，香味不冲，狗狗状态也很放松。",
    tag: "基础洗护"
  },
  {
    name: "周先生",
    pet: "布偶猫 · 芝麻",
    rating: "5.0",
    text: "我家猫很怕吹风，这次分段护理做得很细，等候区能看到大概进度。接回来的时候脚底毛、指甲和耳朵都处理得很干净。",
    tag: "猫咪专护"
  },
  {
    name: "陈女士",
    pet: "泰迪 · 豆豆",
    rating: "4.9",
    text: "圆脸修得很自然，没有剪得死板。店员还提醒了眼周护理和梳毛频率，后续自己在家打理轻松很多。",
    tag: "美容造型"
  },
  {
    name: "许先生",
    pet: "柴犬 · 阿柴",
    rating: "5.0",
    text: "换毛季浮毛特别多，做完以后明显清爽。店里不会一味加项目，会先说明毛量、皮肤情况和实际需要，这点很安心。",
    tag: "皮毛养护"
  },
  {
    name: "王女士",
    pet: "柯基 · 土豆",
    rating: "4.9",
    text: "预约制很省时间，到店不用长等。土豆洗完脚垫和肚皮都很干净，照片反馈也很及时，整体感觉专业又温柔。",
    tag: "精致洗护"
  },
  {
    name: "赵女士",
    pet: "银渐层 · 小满",
    rating: "5.0",
    text: "之前在别处洗澡会应激，这次美容师一直轻声安抚，还建议我避开高峰时段。小满回家没有躲起来，体验比预期好很多。",
    tag: "低刺激护理"
  }
];

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const totalSlides = gallerySlides.length;
  const totalTestimonials = testimonials.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % totalSlides);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [totalSlides]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % totalTestimonials);
    }, 4300);

    return () => window.clearInterval(timer);
  }, [totalTestimonials]);

  const visitInfo = useMemo(
    () => [
      ["营业时间", "10:00 - 21:00"],
      ["门店地址", "阳光里 2 号楼 108"],
      ["预约电话", "021-8866-5200"]
    ],
    []
  );

  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="沐爪宠物洗护首页">
            <span className="brand-mark" aria-hidden="true">M</span>
            <span>沐爪宠物洗护</span>
          </a>
          <div className="nav-links">
            <a href="#gallery">店内环境</a>
            <a href="#services">洗护项目</a>
            <a href="#process">服务流程</a>
            <a href="#pricing">套餐价格</a>
            <a href="#testimonials">客户评价</a>
            <a href="#visit">到店信息</a>
          </div>
          <a className="nav-cta" href="#booking">预约护理</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="eyebrow">一宠一护 独立清洁</div>
            <h1 id="hero-title">给毛孩子一次清爽又安心的洗护</h1>
            <p className="hero-copy">
              沐爪为猫犬提供洗澡吹护、造型修剪、皮毛养护与基础健康观察。温和用品、透明流程、预约到店，减少等待和应激。
            </p>
            <div className="hero-actions">
              <a className="button" href="#booking">立即预约</a>
              <a className="button secondary" href="#pricing">查看套餐</a>
            </div>
            <div className="hero-stats" aria-label="门店亮点">
              <div className="stat">
                <strong>45min</strong>
                <span>小型犬基础洗护起</span>
              </div>
              <div className="stat">
                <strong>1:1</strong>
                <span>专属美容师跟进</span>
              </div>
              <div className="stat">
                <strong>30+</strong>
                <span>细节检查节点</span>
              </div>
            </div>
          </div>
        </section>

        <section className="store-gallery" id="gallery" aria-labelledby="gallery-title">
          <div className="section-inner">
            <div className="section-head">
              <h2 id="gallery-title">中国风格店内环境</h2>
              <p>前台、洗护间、等候区都加入国内社区宠物店常见的温暖木色、玉绿墙面、整洁陈列和轻中式细节。</p>
            </div>
            <div className="carousel" aria-label="店内环境轮播图">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {gallerySlides.map((slide) => (
                  <figure className="carousel-slide" key={slide.title}>
                    <img src={slide.image} alt={slide.alt} loading="lazy" />
                    <figcaption className="slide-caption">
                      <strong>{slide.title}</strong>
                      <span>{slide.description}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <button
                className="carousel-button prev"
                type="button"
                aria-label="上一张"
                onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)}
              >
                ‹
              </button>
              <button
                className="carousel-button next"
                type="button"
                aria-label="下一张"
                onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)}
              >
                ›
              </button>
              <div className="carousel-dots" aria-label="轮播图分页">
                {gallerySlides.map((slide, index) => (
                  <button
                    className={`carousel-dot${activeSlide === index ? " is-active" : ""}`}
                    type="button"
                    aria-label={`查看第 ${index + 1} 张店内环境图`}
                    aria-current={activeSlide === index ? "true" : "false"}
                    key={slide.title}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="section-inner">
            <div className="section-head">
              <h2>洗护项目</h2>
              <p>从日常清洁到皮毛护理，每个项目都按宠物体型、毛量和状态调整操作节奏。</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon" aria-hidden="true">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="section-inner">
            <div className="section-head">
              <h2>服务流程</h2>
              <p>把看不见的细节做成可确认的步骤，让主人放心，也让宠物更从容。</p>
            </div>
            <div className="timeline">
              {processSteps.map((step) => (
                <article className="step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="section-inner">
            <div className="section-head">
              <h2>套餐价格</h2>
              <p>价格会根据体型、毛量、毛结和配合度微调，到店评估后再确认。</p>
            </div>
            <div className="price-grid">
              {priceCards.map((card) => (
                <article className={`price-card${card.featured ? " featured" : ""}`} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="price"><strong>{card.price}</strong><span>元起</span></div>
                  <ul className="price-list">
                    {card.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
          <div className="section-inner">
            <div className="section-head">
              <h2 id="testimonials-title">客户评价</h2>
              <p>来自真实到店主人的反馈，记录宠物洗护后的状态、服务细节和复购理由。</p>
            </div>
            <div className="testimonial-carousel" aria-label="客户评价轮播">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((item) => (
                  <article className="testimonial-slide" key={`${item.name}-${item.pet}`}>
                    <div className="testimonial-card">
                      <div className="review-meta">
                        <span>{item.tag}</span>
                        <strong>{item.rating}</strong>
                      </div>
                      <p>“{item.text}”</p>
                      <div className="reviewer">
                        <span>{item.name}</span>
                        <small>{item.pet}</small>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="testimonial-controls">
                <button
                  className="review-button"
                  type="button"
                  aria-label="上一条评价"
                  onClick={() => setActiveTestimonial((activeTestimonial - 1 + totalTestimonials) % totalTestimonials)}
                >
                  ‹
                </button>
                <div className="review-dots" aria-label="评价分页">
                  {testimonials.map((item, index) => (
                    <button
                      className={`review-dot${activeTestimonial === index ? " is-active" : ""}`}
                      type="button"
                      aria-label={`查看第 ${index + 1} 条客户评价`}
                      aria-current={activeTestimonial === index ? "true" : "false"}
                      key={`${item.name}-${item.tag}`}
                      onClick={() => setActiveTestimonial(index)}
                    />
                  ))}
                </div>
                <button
                  className="review-button"
                  type="button"
                  aria-label="下一条评价"
                  onClick={() => setActiveTestimonial((activeTestimonial + 1) % totalTestimonials)}
                >
                  ›
                </button>
              </div>
              <div className="testimonial-preview" aria-hidden="true">
                {testimonials.slice(0, 3).map((item, index) => {
                  const previewIndex = (activeTestimonial + index + 1) % totalTestimonials;
                  const preview = testimonials[previewIndex];
                  return (
                    <div className="preview-card" key={`${preview.name}-${preview.pet}`}>
                      <strong>{preview.rating}</strong>
                      <span>{preview.name}</span>
                      <small>{preview.pet}</small>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="visit" id="visit">
          <div className="section-inner visit-layout">
            <div>
              <h2>预约制到店，护理不赶场</h2>
              <p>
                我们按时间段安排美容师和洗护间，避免宠物长时间等待。首次到店建议预留 10 分钟完成信息登记和状态沟通。
              </p>
            </div>
            <aside className="info-panel" aria-label="门店信息">
              {visitInfo.map(([label, value]) => (
                <div className="info-row" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </aside>
            <div className="store-map" aria-label="???????">
              <div className="map-canvas">
                <span className="map-road main" />
                <span className="map-road cross" />
                <span className="map-road side-a" />
                <span className="map-road side-b" />
                <span className="map-block block-a" />
                <span className="map-block block-b" />
                <span className="map-block block-c" />
                <span className="map-block block-d" />
                <span className="map-pin" aria-hidden="true"><span>M</span></span>
              </div>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="section-inner booking-box">
            <div className="booking-note">
              <h2>预约下一次洗护</h2>
              <p>填写宠物情况后，门店会尽快确认可预约时间。急单建议直接电话联系。</p>
              <a className="button secondary" href="tel:02188665200">拨打门店电话</a>
            </div>
            <form>
              <label>
                主人姓名
                <input type="text" name="owner" placeholder="例如：林女士" autoComplete="name" />
              </label>
              <label>
                联系电话
                <input type="tel" name="phone" placeholder="用于确认预约" autoComplete="tel" />
              </label>
              <label>
                宠物类型
                <select name="pet" defaultValue="小型犬">
                  <option>小型犬</option>
                  <option>中大型犬</option>
                  <option>猫咪</option>
                  <option>其他宠物</option>
                </select>
              </label>
              <label>
                预约项目
                <select name="service" defaultValue="基础洗澡">
                  <option>基础洗澡</option>
                  <option>精致洗护</option>
                  <option>美容造型</option>
                  <option>猫咪专护</option>
                </select>
              </label>
              <label className="full">
                备注
                <textarea name="note" placeholder="宠物年龄、体重、毛结、皮肤情况或希望预约的时间" />
              </label>
              <div className="form-actions">
                <span>提交后将由门店人工确认，当前表单为页面演示。</span>
                <button className="button" type="button">提交预约</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span>© 2026 沐爪宠物洗护</span>
          <span>温和洗护 · 透明护理 · 预约到店</span>
        </div>
      </footer>
    </>
  );
}
