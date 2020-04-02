import { Selector } from 'testcafe';

fixture `HomePage`
    .page `https://gfi.world/es-es/`;

test('Check partners', async t => {
    await t
        .maximizeWindow( )
        .click('#main-navigation > ul:nth-child(2) > li.inbl.fs14.finances')
        .expect(Selector('.content-info> hgroup> h1').innerText).eql('Partners')
        .click('#main-wrapper > section > div > div > div:nth-child(2) > figure > figcaption > p.inbl > a')
        .expect(Selector('#main-wrapper > div.content-page > div > section > article > div > div > p:nth-child(13)').innerText).eql('DYNATRACE');
});

test('Form contact me', async t => {
    await t
        .maximizeWindow( )
        .click('#main-navigation > ul:nth-child(2) > li.inbl.fs14.contact')
        .expect(Selector('#headerEntries > div > div > div > hgroup > h1').innerText).eql('Contactos')
        .click('#gfi_contact_contact_gender_1')
        .typeText('#gfi_contact_contact_firstname','Ronald')
        .typeText('#gfi_contact_contact_lastname','Estupiñan')
        .typeText('#gfi_contact_contact_mail','ronald-hernan@gfi.world.com')
        .typeText('#gfi_contact_contact_society','GFI-Norte')
        .click('#gfi_contact_contact_subject')
        .click('#gfi_contact_contact_subject > option:nth-child(3)')  
        .wait(5000)  
});
