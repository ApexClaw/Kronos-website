document.getElementById('continueBtn').addEventListener('click', () => {
    document.querySelector('.header').classList.add('hidden');
    document.getElementById('lore').classList.remove('hidden');
    document.body.style.overflow = 'auto';
});
