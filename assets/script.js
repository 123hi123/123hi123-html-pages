async function loadPages() {
    try {
        const response = await fetch('data/pages.json');
        const data = await response.json();
        const pagesList = document.getElementById('pagesList');
        
        if (data.pages && data.pages.length > 0) {
            pagesList.innerHTML = data.pages.map(page => `
                <div class="page-item">
                    <div class="page-title">${page.title}</div>
                    <a href="pages/${page.filename}" class="page-link" target="_blank">
                        查看頁面
                    </a>
                    <div class="page-date">上傳時間: ${new Date(page.created_at).toLocaleDateString('zh-TW')}</div>
                </div>
            `).join('');
        } else {
            pagesList.innerHTML = '<p>目前沒有頁面</p>';
        }
    } catch (error) {
        console.error('載入頁面失敗:', error);
        document.getElementById('pagesList').innerHTML = '<p>載入頁面時發生錯誤</p>';
    }
}

document.addEventListener('DOMContentLoaded', loadPages);