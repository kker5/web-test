// 카테고리별 배경 이미지 매핑
const categoryBackgrounds = {
    'birthday': '/images/card_be_birthday.png',
    'wedding': '/images/card_be_wedding.png',
    'cost settlement': '/images/card_be_calculate.png',
    'health': '/images/card_be_health.png',
    'thanks': '/images/card_be_thanks.png',
    'allowance': '/images/card_be_allowance.png',
    'cheering': '/images/card_be_cheerup.png',
    'etc': '/images/card_be_default.png'
};

/**
 * 카테고리에 따른 배경 이미지 URL을 반환하는 함수
 * @param {string} category - 카테고리 이름
 * @returns {string} 배경 이미지 URL
 */
function getCategoryBackground(category) {
    const background = categoryBackgrounds[category] || categoryBackgrounds.default;
    return background;
}

/**
 * 요소의 배경 이미지를 설정하는 함수
 * @param {HTMLElement} element - 배경 이미지를 설정할 요소
 * @param {string} category - 카테고리 이름
 */
function setElementBackground(element, category) {
    const backgroundUrl = getCategoryBackground(category);
    element.style.backgroundImage = `url(${backgroundUrl})`;
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
}

// 전역에서 사용할 수 있도록 window 객체에 함수 추가
window.getCategoryBackground = getCategoryBackground;
window.setElementBackground = setElementBackground; 