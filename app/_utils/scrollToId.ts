"use client"
export const scrollToId = (id: string, snap?: boolean) => {
    const yOffset = -100;
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        if (snap) {
            window.scrollTo({top: y, behavior: 'instant'});
            return;
        }
        window.scrollTo({top: y, behavior: 'smooth'});
    }
}
