// Toggle link buttons
function Link(element, i) {
    const links = document.querySelectorAll('.' + element);

    let activeLink = null;
    let activeLinkIndex = i;

    const toggleLink = (index) => {
        const link = links[index];
        if (link !== activeLink) {
            activeLink.classList.remove('is-active');

            link.classList.add('is-active');
            activeLink = link;
            activeLinkIndex = index;
        }
    };

    links.forEach((link, index) => {
        link.classList.remove('is-active');

        if (index === activeLinkIndex) {
            link.classList.add('is-active');
            activeLink = link;
            activeLinkIndex = index;
        }

        link.addEventListener('click', () => toggleLink(index));
    })
}

new Link('site-nav__link', 1);
new Link('slider-item', 0)