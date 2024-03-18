import{_ as s,c as a,o as i,a2 as t}from"./chunks/framework.Bx6qu0xe.js";const E=JSON.parse('{"title":"Авторизация","description":"","frontmatter":{},"headers":[],"relativePath":"auth.md","filePath":"auth.md"}'),e={name:"auth.md"},n=t(`<h1 id="авторизация" tabindex="-1">Авторизация <a class="header-anchor" href="#авторизация" aria-label="Permalink to &quot;Авторизация&quot;">​</a></h1><h2 id="введение" tabindex="-1">Введение <a class="header-anchor" href="#введение" aria-label="Permalink to &quot;Введение&quot;">​</a></h2><p>Авторизация в нашей системе осуществляется с помощью Laravel Sanctum. Это означает, что для авторизации вам потребуется использовать API-токен.</p><p>Для получения и использования <code>Personal Access Token (PAT)</code> в нашей системе, вам потребуется выполнить следующие шаги:</p><ol><li>Запрос на создание токена: После успешной аутентификации, вы можете отправить запрос на создание PAT. В ответ на этот запрос, система сгенерирует уникальный токен и вернет его вам.</li><li>Сохранение токена: Полученный токен следует сохранить для дальнейшего использования. Обратите внимание, что система не будет хранить этот токен в открытом виде, поэтому его невозможно будет восстановить. Если вы потеряете токен, вам придется создать новый.</li><li>Использование токена: Теперь вы можете использовать этот токен для авторизации ваших запросов к API. Просто включите его в заголовок <code>Authorization</code> ваших запросов в формате <code>Bearer {token}</code>.</li><li>Авторизация запроса: Если токен действителен, ваш запрос будет авторизован и обработан системой. В противном случае, система вернет ошибку авторизации.</li></ol><div class="warning custom-block"><p class="custom-block-title">Внимание</p><p>Пожалуйста, обратите внимание, что каждый PAT связан с конкретным аккаунтом и предоставляет доступ к API от имени этого аккаунта.</p></div><h2 id="создание-токена" tabindex="-1">Создание токена <a class="header-anchor" href="#создание-токена" aria-label="Permalink to &quot;Создание токена&quot;">​</a></h2><p>Для создания Personal Access Token (PAT) вам потребуется выполнить HTTP-запрос к нашему API. Вот как это может выглядеть: HTTP-запрос: Метод: <strong>POST</strong> URL: <strong><a href="https://homecomfort.kz/api/auth/token" target="_blank" rel="noreferrer">https://homecomfort.kz/api/auth/token</a></strong> Тело запроса:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-email@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;password&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-password&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Заголовки:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Accept&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;application/json&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Ответ: Статус: <code>200 OK</code> Тело ответа:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;token&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-token&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>В этом примере вы отправляете POST-запрос на URL <code>https://homecomfort.kz/api/auth/token</code> с вашими учетными данными в теле запроса. В ответ на этот запрос, сервер вернет вам ваш уникальный Personal Access Token.</p><p>Пожалуйста, замените <a href="mailto:your-email@example.com" target="_blank" rel="noreferrer">your-email@example.com</a> и your-password на реальные значения.</p>`,15),o=[n];function l(p,h,r,k,c,d){return i(),a("div",null,o)}const g=s(e,[["render",l]]);export{E as __pageData,g as default};