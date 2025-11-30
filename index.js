const defaultConfig = {
    site_title: "WEB CỦA HUNGNEE",
    hero_title: "Chào mừng đến với Web của tôi",
    hero_subtitle: "Khám phá các dự án và kỹ năng của tôi trong phát triển web",
    about_title: "Giới thiệu",
    about_text: "Tôi là một nhà phát triển web đam mê tạo ra những trải nghiệm web đẹp mắt và dễ truy cập. Với kinh nghiệm trong HTML, CSS, và JavaScript, tôi tập trung vào việc xây dựng các trang web responsive và thân thiện với người dùng.",
    projects_title: "Dự án của tôi",
    contact_title: "Liên hệ với tôi",
    footer_text: "© 2025 HungNee. Tất cả quyền được bảo lưu."
};

async function onConfigChange(config) {
    document.getElementById('site-title').textContent = config.site_title || defaultConfig.site_title;
    document.getElementById('hero-title').textContent = config.hero_title || defaultConfig.hero_title;
    document.getElementById('hero-subtitle').textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
    document.getElementById('about-title').textContent = config.about_title || defaultConfig.about_title;
    document.getElementById('about-text').textContent = config.about_text || defaultConfig.about_text;
    document.getElementById('projects-title').textContent = config.projects_title || defaultConfig.projects_title;
    document.getElementById('contact-title').textContent = config.contact_title || defaultConfig.contact_title;
    document.getElementById('footer-text').textContent = config.footer_text || defaultConfig.footer_text;
}

function mapToCapabilities(config) {
    return {
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    };
}

function mapToEditPanelValues(config) {
    return new Map([
        ["site_title", config.site_title || defaultConfig.site_title],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["about_title", config.about_title || defaultConfig.about_title],
        ["about_text", config.about_text || defaultConfig.about_text],
        ["projects_title", config.projects_title || defaultConfig.projects_title],
        ["contact_title", config.contact_title || defaultConfig.contact_title],
        ["footer_text", config.footer_text || defaultConfig.footer_text]
    ]);
}

if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
    });
}