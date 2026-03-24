// ═══════════════════════════════════════════════════════════════════
// PLAYAS DE TIJUANA — APPS SCRIPT
// Paste this ENTIRE file into your Apps Script editor, replacing
// your existing code. Save, then re-deploy as Web App.
// ═══════════════════════════════════════════════════════════════════

// ── CONSTANTS ───────────────────────────────────────────────────────
const SHEET_ID     = '1BngkendJTQpVup0PeRYDIr9Uvc4kv9EgIrwSEx1jfGU';
const NOTIFY_EMAIL = 'j2padill@gmail.com';
const SITE_URL     = 'https://miplayasdetijuana.com';

const PAGE_MAP = {
  'Yoga Page':        SITE_URL + '/yoga.html',
  'Surf Page':        SITE_URL + '/surf.html',
  'Dance Page':       SITE_URL + '/dance.html',
  'Fitness Page':     SITE_URL + '/fitness.html',
  'Martial Arts Page':SITE_URL + '/martial-arts.html',
  'Cooking Page':     SITE_URL + '/cooking.html',
  'Language Page':    SITE_URL + '/language.html',
  'Art Page':         SITE_URL + '/art.html',
  'Adults Page':      SITE_URL + '/adultos.html',
  'Events Page':      SITE_URL + '/index.html#events',
  'Real Estate Page': SITE_URL + '/realestate.html',
};

// ── HELPERS ─────────────────────────────────────────────────────────
function generateToken() {
  return Utilities.getUuid();
}

function getMainSheet() {
  return SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
}

function getRealEstateSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const re = ss.getSheetByName('Real Estate');
  if (!re) throw new Error('Real Estate tab not found. Please create it.');
  return re;
}

// ═══════════════════════════════════════════════════════════════════
// doPost — routes submissions to the right sheet
// ═══════════════════════════════════════════════════════════════════
function doPost(e) {
  try {
    const data = JSON.parse(e.parameter.payload);

    // ── Route real estate to its own tab ──────────────────────────
    if (data['Source'] === 'Real Estate Page') {
      return handleRealEstate(data);
    }

    // ── Everything else goes to the main sheet ────────────────────
    const sheet = getMainSheet();

    // ── Handle Delete Request ────────────────────────────────────
    if (data['Status'] === 'Deleted' && data['Update Token']) {
      const allRows = sheet.getDataRange().getValues();
      for (let i = 1; i < allRows.length; i++) {
        if (allRows[i][30] === data['Update Token']) {
          sheet.getRange(i + 1, 23).setValue('Deleted');
          return ok();
        }
      }
    }

    // ── Handle Update Request (has token) ────────────────────────
    if (data['Update Token']) {
      const allRows = sheet.getDataRange().getValues();
      for (let i = 1; i < allRows.length; i++) {
        if (allRows[i][30] === data['Update Token']) {
          const r = i + 1;
          if (data['Business Name'])   sheet.getRange(r, 3).setValue(data['Business Name']);
          if (data['Category'])        sheet.getRange(r, 4).setValue(data['Category']);
          if (data['Description'])     sheet.getRange(r, 5).setValue(data['Description']);
          if (data['Address'])         sheet.getRange(r, 6).setValue(data['Address']);
          if (data['Phone'])           sheet.getRange(r, 7).setValue(data['Phone']);
          if (data['Email'])           sheet.getRange(r, 8).setValue(data['Email']);
          if (data['Website'])         sheet.getRange(r, 9).setValue(data['Website']);
          if (data['Instagram'])       sheet.getRange(r, 10).setValue(data['Instagram']);
          if (data['Facebook'])        sheet.getRange(r, 11).setValue(data['Facebook']);
          if (data['WhatsApp'])        sheet.getRange(r, 12).setValue(data['WhatsApp']);
          if (data['Monday Hours'])    sheet.getRange(r, 13).setValue(data['Monday Hours']);
          if (data['Tuesday Hours'])   sheet.getRange(r, 14).setValue(data['Tuesday Hours']);
          if (data['Wednesday Hours']) sheet.getRange(r, 15).setValue(data['Wednesday Hours']);
          if (data['Thursday Hours'])  sheet.getRange(r, 16).setValue(data['Thursday Hours']);
          if (data['Friday Hours'])    sheet.getRange(r, 17).setValue(data['Friday Hours']);
          if (data['Saturday Hours'])  sheet.getRange(r, 18).setValue(data['Saturday Hours']);
          if (data['Sunday Hours'])    sheet.getRange(r, 19).setValue(data['Sunday Hours']);
          if (data['Photo Count'] > 0) {
            sheet.getRange(r, 24).setValue(data['Photo Count']);
            if (data['Photo_1']) sheet.getRange(r, 25).setValue(data['Photo_1']);
            if (data['Photo_2']) sheet.getRange(r, 26).setValue(data['Photo_2']);
            if (data['Photo_3']) sheet.getRange(r, 27).setValue(data['Photo_3']);
            if (data['Photo_4']) sheet.getRange(r, 28).setValue(data['Photo_4']);
            if (data['Photo_5']) sheet.getRange(r, 29).setValue(data['Photo_5']);
          }
          MailApp.sendEmail({
            to: NOTIFY_EMAIL,
            subject: '✏️ Listing updated: ' + (data['Business Name'] || allRows[i][2]),
            body: 'A listing was updated on the site.\n\nBusiness: ' + allRows[i][2] +
                  '\n\nView sheet:\nhttps://docs.google.com/spreadsheets/d/' + SHEET_ID,
          });
          return ok();
        }
      }
    }

    // ── Handle New Submission ────────────────────────────────────
    const token = generateToken();
    const row = [
      new Date().toLocaleString('en-US', {timeZone: 'America/Tijuana'}),
      data['Source']           || '',
      data['Business Name']    || '',
      data['Category']         || '',
      data['Description']      || '',
      data['Address']          || '',
      data['Phone']            || '',
      data['Email']            || '',
      data['Website']          || '',
      data['Instagram']        || '',
      data['Facebook']         || '',
      data['WhatsApp']         || '',
      data['Monday Hours']     || '',
      data['Tuesday Hours']    || '',
      data['Wednesday Hours']  || '',
      data['Thursday Hours']   || '',
      data['Friday Hours']     || '',
      data['Saturday Hours']   || '',
      data['Sunday Hours']     || '',
      data['Contact Name']     || '',
      data['Contact Email']    || '',
      data['Additional Notes'] || '',
      'Pending',
      data['Photo Count']      || 0,
      data['Photo_1']          || '',
      data['Photo_2']          || '',
      data['Photo_3']          || '',
      data['Photo_4']          || '',
      data['Photo_5']          || '',
      data['Profile Photo']    || '',
      token,
    ];
    sheet.appendRow(row);
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: '📋 New listing: ' + (data['Business Name'] || '(no name)') + ' — ' + (data['Category'] || ''),
      body: [
        'New listing submitted to Playas de Tijuana.',
        '',
        'Business:      ' + (data['Business Name'] || '—'),
        'Category:      ' + (data['Category']      || '—'),
        'Source:        ' + (data['Source']        || '—'),
        'Phone:         ' + (data['Phone']         || '—'),
        'Address:       ' + (data['Address']       || '—'),
        'Contact Name:  ' + (data['Contact Name']  || '—'),
        'Contact Email: ' + (data['Contact Email'] || '—'),
        '',
        'To approve, open the sheet and change Status to Approved:',
        'https://docs.google.com/spreadsheets/d/' + SHEET_ID,
      ].join('\n'),
    });
    return ok();

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ═══════════════════════════════════════════════════════════════════
// handleRealEstate — writes to the Real Estate tab
// ═══════════════════════════════════════════════════════════════════
function handleRealEstate(data) {
  const sheet = getRealEstateSheet();
  const token = generateToken();
  const now   = new Date();

  // ── Handle Renewal Request ───────────────────────────────────
  if (data['Action'] === 'Renew' && data['RE Token']) {
    const allRows = sheet.getDataRange().getValues();
    for (let i = 1; i < allRows.length; i++) {
      if (allRows[i][19] === data['RE Token']) {  // col T (index 19) = token
        const r          = i + 1;
        const newExpiry  = new Date(now.getTime() + 210 * 24 * 60 * 60 * 1000);
        sheet.getRange(r, 17).setValue(Utilities.formatDate(now,      'America/Tijuana', 'yyyy-MM-dd')); // Q Submitted Date
        sheet.getRange(r, 18).setValue(Utilities.formatDate(newExpiry,'America/Tijuana', 'yyyy-MM-dd')); // R Expiry Date
        sheet.getRange(r, 28).setValue('Approved'); // AB Status — keep approved after renewal
        MailApp.sendEmail({
          to: NOTIFY_EMAIL,
          subject: '🔄 Listing renewed: ' + (allRows[i][2] || 'Real Estate'),
          body: 'A real estate listing was renewed for another 7 months.\n\n' +
                'Title: ' + allRows[i][2] + '\nAddress: ' + allRows[i][7] +
                '\nNew expiry: ' + Utilities.formatDate(newExpiry, 'America/Tijuana', 'yyyy-MM-dd') +
                '\n\nView sheet:\nhttps://docs.google.com/spreadsheets/d/' + SHEET_ID + '#gid=1898785681',
        });
        return ok();
      }
    }
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: 'Token not found' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  // ── New Real Estate Submission ───────────────────────────────
  const submittedDate = Utilities.formatDate(now, 'America/Tijuana', 'yyyy-MM-dd');
  const expiryDate    = Utilities.formatDate(
    new Date(now.getTime() + 210 * 24 * 60 * 60 * 1000),
    'America/Tijuana', 'yyyy-MM-dd'
  );

  // Column layout (A=1 … AB=28):
  // A=Submitted At, B=Listing Type, C=Title, D=Price, E=Bedrooms, F=Bathrooms,
  // G=Sq Meters, H=Address, I=Neighborhood, J=Furnished, K=Pets Allowed, L=Parking,
  // M=Contact Name, N=Contact Phone, O=Contact Email, P=Source,
  // Q=Submitted Date, R=Expiry Date, S=Days Remaining (formula), T=Token,
  // U=Photo Count, V=Profile Photo, W=Photo 1, X=Photo 2, Y=Photo 3, Z=Photo 4, AA=Photo 5,
  // AB=Status
  const row = [
    new Date().toLocaleString('en-US', {timeZone: 'America/Tijuana'}), // A Submitted At
    data['Listing Type']   || '',   // B
    data['Title']          || '',   // C
    data['Price']          || '',   // D
    data['Bedrooms']       || '',   // E
    data['Bathrooms']      || '',   // F
    data['Sq Meters']      || '',   // G
    data['Address']        || '',   // H
    data['Neighborhood']   || '',   // I
    data['Furnished']      || '',   // J
    data['Pets Allowed']   || '',   // K
    data['Parking']        || '',   // L
    data['Contact Name']   || '',   // M
    data['Contact Phone']  || '',   // N
    data['Contact Email']  || '',   // O
    'Real Estate Page',             // P Source
    submittedDate,                  // Q Submitted Date
    expiryDate,                     // R Expiry Date
    '',                             // S Days Remaining — left for sheet formula =R2-TODAY()
    token,                          // T Token
    data['Photo Count']    || 0,    // U
    data['Profile Photo']  || '',   // V
    data['Photo 1']        || '',   // W
    data['Photo 2']        || '',   // X
    data['Photo 3']        || '',   // Y
    data['Photo 4']        || '',   // Z
    data['Photo 5']        || '',   // AA
    'Pending',                      // AB Status
  ];
  sheet.appendRow(row);

  // Notify admin
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: '🏠 New real estate listing: ' + (data['Title'] || data['Address'] || '(untitled)'),
    body: [
      'New real estate listing submitted.',
      '',
      'Type:      ' + (data['Listing Type']  || '—'),
      'Title:     ' + (data['Title']         || '—'),
      'Price:     $' + (data['Price']        || '—'),
      'Bedrooms:  ' + (data['Bedrooms']      || '—'),
      'Bathrooms: ' + (data['Bathrooms']     || '—'),
      'Address:   ' + (data['Address']       || '—'),
      'Contact:   ' + (data['Contact Name']  || '—'),
      'Email:     ' + (data['Contact Email'] || '—'),
      'Phone:     ' + (data['Contact Phone'] || '—'),
      '',
      'To approve, open the Real Estate tab and change Status to Approved:',
      'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '#gid=1898785681',
    ].join('\n'),
  });

  return ok();
}

// ═══════════════════════════════════════════════════════════════════
// doGet — token lookup (existing business listings + real estate)
// ═══════════════════════════════════════════════════════════════════
function doGet(e) {
  const token    = e && e.parameter && e.parameter.token;
  const reToken  = e && e.parameter && e.parameter.re_token;
  const callback = e && e.parameter && e.parameter.callback;

  function respond(obj) {
    const json = JSON.stringify(obj);
    if (callback) {
      return ContentService
        .createTextOutput(callback + '(' + json + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }
    return ContentService
      .createTextOutput(json)
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (!token && !reToken) {
    return respond({ status: 'ok', message: 'Playas script is live' });
  }

  // ── Real estate token lookup ─────────────────────────────────
  if (reToken) {
    try {
      const sheet = getRealEstateSheet();
      const data  = sheet.getDataRange().getValues();
      for (let i = 1; i < data.length; i++) {
        if (data[i][19] === reToken) {  // col T = token (index 19)
          const status = String(data[i][27]).toLowerCase(); // col AB = index 27
          return respond({
            status:      'ok',
            valid:       true,
            re_status:   status,
            listing_type:data[i][1],
            title:       data[i][2],
            price:       data[i][3],
            bedrooms:    data[i][4],
            bathrooms:   data[i][5],
            sq_meters:   data[i][6],
            address:     data[i][7],
            neighborhood:data[i][8],
            furnished:   data[i][9],
            pets:        data[i][10],
            parking:     data[i][11],
            contact_name:data[i][12],
            expiry_date: data[i][17],
          });
        }
      }
      return respond({ status: 'ok', valid: false });
    } catch(err) {
      return respond({ status: 'error', message: err.message });
    }
  }

  // ── Standard business token lookup ──────────────────────────
  try {
    const sheet = getMainSheet();
    const data  = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (data[i][30] === token && String(data[i][22]).toLowerCase() === 'approved') {
        return respond({
          status:    'ok', valid: true,
          business:  data[i][2],
          category:  data[i][3],
          description:data[i][4],
          address:   data[i][5],
          phone:     data[i][6],
          email:     data[i][7],
          website:   data[i][8],
          instagram: data[i][9],
          facebook:  data[i][10],
          whatsapp:  data[i][11],
          monday:    data[i][12],
          tuesday:   data[i][13],
          wednesday: data[i][14],
          thursday:  data[i][15],
          friday:    data[i][16],
          saturday:  data[i][17],
          sunday:    data[i][18],
        });
      }
    }
    return respond({ status: 'ok', valid: false });
  } catch(err) {
    return respond({ status: 'error', message: err.message });
  }
}

// ═══════════════════════════════════════════════════════════════════
// onEdit — fires when Status is changed in EITHER sheet
// ═══════════════════════════════════════════════════════════════════
function onEdit(e) {
  const sheet  = e.range.getSheet();
  const col    = e.range.getColumn();
  const row    = e.range.getRow();
  const newVal = e.value;

  if (row < 2) return;

  const sheetName = sheet.getName();

  // ── Real Estate tab: Status = col AB = 28 ───────────────────
  if (sheetName === 'Real Estate' && col === 28) {
    if (String(newVal).toLowerCase() !== 'approved') return;

    const rowData      = sheet.getRange(row, 1, 1, 28).getValues()[0];
    const title        = rowData[2];   // C Title
    const address      = rowData[7];   // H Address
    const contactName  = rowData[12];  // M Contact Name
    const contactEmail = rowData[14];  // O Contact Email
    const listingType  = rowData[1];   // B Listing Type
    const token        = rowData[19];  // T Token
    const expiryDate   = rowData[17];  // R Expiry Date

    if (!contactEmail || !token) return;

    const pageUrl   = listingType.toLowerCase().includes('rent')
                    ? SITE_URL + '/rentals.html'
                    : SITE_URL + '/ventas.html';
    const renewUrl  = SITE_URL + '/renew-listing.html?re_token=' + token;

    MailApp.sendEmail({
      to: contactEmail,
      subject: '🎉 Your real estate listing on Playas de Tijuana is now live!',
      body: [
        'Hi ' + (contactName || 'there') + ',',
        '',
        'Great news — your listing "' + (title || address) + '" is now live!',
        '',
        'You can view it here:',
        pageUrl,
        '',
        '── YOUR LISTING EXPIRES: ' + expiryDate + ' ──────────────────',
        'We will send you a reminder one month before it expires.',
        'You can also renew at any time using your private link:',
        '',
        renewUrl,
        '',
        'Keep this link safe — it is your key to renew or update your listing.',
        '',
        '─────────────────────────────────────────────',
        'Questions? Reply to this email.',
        '',
        'Playas de Tijuana Community Hub',
        'miplayasdetijuana.com',
      ].join('\n'),
    });
    return;
  }

  // ── Main sheet: Status = col W = 23 ─────────────────────────
  if (sheetName !== 'Real Estate' && col === 23) {
    if (String(newVal).toLowerCase() !== 'approved') return;

    const rowData     = sheet.getRange(row, 1, 1, 31).getValues()[0];
    const bizName     = rowData[2];
    const source      = rowData[1];
    const ownerEmail  = rowData[20];
    const token       = rowData[30];

    if (!ownerEmail || !token) return;

    const pageUrl    = PAGE_MAP[source] || SITE_URL;
    const updateLink = pageUrl + '?update=' + token;

    MailApp.sendEmail({
      to: ownerEmail,
      subject: '🎉 Your listing on Playas de Tijuana is now live!',
      body: [
        'Hi ' + (rowData[19] || 'there') + ',',
        '',
        'Great news — your listing for "' + bizName + '" is now live on Playas de Tijuana!',
        '',
        'You can view it here:',
        pageUrl,
        '',
        '── UPDATE YOUR LISTING ──────────────────────',
        'Need to add photos, update your hours, or change any details?',
        'Use your private update link below. Keep it safe.',
        '',
        updateLink,
        '',
        '─────────────────────────────────────────────',
        'Questions? Reply to this email.',
        '',
        'Playas de Tijuana Community Hub',
        'miplayasdetijuana.com',
      ].join('\n'),
    });
  }
}

// ═══════════════════════════════════════════════════════════════════
// checkExpiringListings — set up as a daily time-based trigger
// In Apps Script: Triggers → Add Trigger → checkExpiringListings
// → Time-driven → Day timer → between 6am-7am
// ═══════════════════════════════════════════════════════════════════
function checkExpiringListings() {
  const sheet   = getRealEstateSheet();
  const data    = sheet.getDataRange().getValues();
  const today   = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 1; i < data.length; i++) {
    const status      = String(data[i][27]).toLowerCase(); // AB col 28, index 27
    const expiryStr   = data[i][17];                       // R col 18, index 17
    const contactEmail= data[i][14];                       // O col 15, index 14
    const contactName = data[i][12];                       // M col 13, index 12
    const title       = data[i][2];                        // C col 3, index 2
    const address     = data[i][7];                        // H col 8, index 7
    const listingType = data[i][1];                        // B col 2, index 1
    const token       = data[i][19];                       // T col 20, index 19

    if (!expiryStr || status === 'expired' || status === 'denied' || status === 'pending') continue;

    const expiryDate = new Date(expiryStr);
    expiryDate.setHours(0, 0, 0, 0);
    const daysLeft = Math.round((expiryDate - today) / (1000 * 60 * 60 * 24));

    // ── Auto-expire at 0 days ─────────────────────────────────
    if (daysLeft <= 0 && status === 'approved') {
      sheet.getRange(i + 1, 28).setValue('Expired'); // AB
      if (contactEmail) {
        MailApp.sendEmail({
          to: contactEmail,
          subject: '⏰ Your Playas listing has expired',
          body: [
            'Hi ' + (contactName || 'there') + ',',
            '',
            'Your listing "' + (title || address) + '" has expired after 7 months',
            'and has been removed from miplayasdetijuana.com.',
            '',
            'If your property is still available, you can post a new listing at:',
            SITE_URL + '/realestate.html',
            '',
            'It only takes a minute — and it\'s always free.',
            '',
            'Playas de Tijuana Community Hub',
            'miplayasdetijuana.com',
          ].join('\n'),
        });
      }
      continue;
    }

    // ── Warning email at exactly 30 days remaining (month 6) ─
    if (daysLeft === 30 && status === 'approved' && contactEmail && token) {
      const renewUrl  = SITE_URL + '/renew-listing.html?re_token=' + token;
      const pageUrl   = listingType.toLowerCase().includes('rent')
                      ? SITE_URL + '/rentals.html'
                      : SITE_URL + '/ventas.html';

      MailApp.sendEmail({
        to: contactEmail,
        subject: '⚠️ Your Playas listing expires in 30 days',
        body: [
          'Hi ' + (contactName || 'there') + ',',
          '',
          'Your listing "' + (title || address) + '" on Playas de Tijuana',
          'will expire in 30 days on ' + expiryStr + '.',
          '',
          'Is your property still available? Renew your listing in one click:',
          '',
          renewUrl,
          '',
          'Renewing is free and extends your listing for another 7 months.',
          'If the property is no longer available, no action is needed —',
          'it will be removed automatically.',
          '',
          'View your current listing:',
          pageUrl,
          '',
          '─────────────────────────────────────────────',
          'Playas de Tijuana Community Hub',
          'miplayasdetijuana.com',
        ].join('\n'),
      });
    }
  }
}

// ── Helper: clean JSON response ──────────────────────────────────
function ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}
