export const calcData = {
  "complexes": [
    {
      "name": "Сервер баз данных ПАК \"Инсонет\" с  предустановленным прикладным программным обеспечением (ППО) \"Инсонет\"  (INS-00, INS-SMS)",
      "article": "ИНС-С",
      "price": 3120000,
      "description": "Описание Сервер БД",
      "id": "ins-s",
      "index": 101,
      "type": 1,
      "typeOs": "srv"
    },
    {
      "name": "Сервер баз данных повышенной надежности ПАК \"Инсонет\" с предустановленным прикладным программным обеспечением (ППО) \"Инсонет\" (INS-00, INS-SMS)",
      "article": "ИНС-СП",
      "price": 4530000,
      "description": "Описание Сервер БД повышенной надежности",
      "id": "ins-sp",
      "index": 102,
      "type": 2,
      "typeOs": "srv"
    },
    {
      "name": "Блок сопряжения ПАК \"Инсонет\" с предустановленным прикладным программным обеспечением (ППО) \"Инсонет\" (INS-REZ)",
      "article": "ИНС-БС",
      "price": 2650000,
      "description": "Описание блока сопряжения",
      "id": "ins-bs",
      "index": 103,
      "type": 3,
      "typeOs": "cln"
    },
    {
      "name": "Автоматизированное рабочее место (АРМ) ПАК \"Инсонет\" с предустановленным прикладным программным обеспечением (ППО) \"Инсонет\" (INS-OPER)",
      "article": "ИНС-А",
      "price": 890000,
      "description": "Описание АРМ",
      "id": "ins-a",
      "index": 104,
      "type": 4,
      "typeOs": "cln"
    }
  ],
  "os": [
    {
      "name": "NoOS",
      "article": "0",
      "price": 0,
      "description": "Без операционной системы",
      "id": "noos",
      "index": 201,
      "type": "all"
    },
    {
      "name": "REDOS-SRV-CER-STD-0123",
      "article": "1",
      "price": 44500,
      "description": "Простая (неисключительная) лицензия на право использования операционной системы РЕД ОС без ограничения срока действия. Сертифицированная редакция. Конфигурация \"Сервер\". Включает 1 год гарантии стандартного уровня.",
      "id": "red-srv",
      "index": 202,
      "type": "srv"
    },
    {
      "name": "REDOS-DSP-CER-STD-0123",
      "article": "2",
      "price": 16800,
      "description": "Простая (неисключительная) лицензия на право использования операционной системы РЕД ОС без ограничения срока действия. Сертифицированная редакция. Конфигурация \"Рабочая станция\". Включает 1 год гарантии стандартного уровня.",
      "id": "red-cln",
      "index": 203,
      "type": "cln"
    },
    {
      "name": "Windows 10 Pro",
      "article": "3",
      "price": 19000,
      "description": "Лицензия на право использования операционной системы без ограничения срока действия.  Конфигурация \"Рабочая станция\". Операционная система Windows 10 Pro",
      "id": "win-cln",
      "index": 204,
      "type": "cln"
    },
    {
      "name": "Windows Server 2022 Standard",
      "article": "4",
      "price": 105000,
      "description": "Лицензия на право использования операционной системы  без ограничения срока действия.  Конфигурация \"Сервер\"Windows Server 2022 Standard",
      "id": "win-srv",
      "index": 205,
      "type": "srv"
    }
  ],
  "modules": [
    {
      "name": "Модуль администрирования параметров комплекса, мониторинга и управления системами  (INS-ADM)",
      "article": "01",
      "price": 350000,
      "description": "Описание модуля администрирования параметров комплекса",
      "id": "ins-adm",
      "index": 301,
      "isChecked": false
    },
    {
      "name": "Модуль отображения данных посетителя INS-PASS",
      "article": "03",
      "price": 350000,
      "description": "описание модуля отображения данных посетителя",
      "id": "ins-pass",
      "index": 303,
      "isChecked": false
    },
    {
      "name": "Модуль оповещения о событиях INS-TABLO",
      "article": "04",
      "price": 350000,
      "description": "описание модуля оповещения о событиях",
      "id": "ins-tablo",
      "index": 304,
      "isChecked": false
    },
    {
      "name": "Модуль онлайн-мониторинга INS-ONLINE",
      "article": "05",
      "price": 350000,
      "description": "описание модуля онлайн-мониторинга",
      "id": "ins-online",
      "index": 305,
      "isChecked": false
    },
    {
      "name": "Модуль распознавания данных с документов INS-RCGN",
      "article": "06",
      "price": 350000,
      "description": "описание распознавания данных с документов",
      "id": "ins-rcgn",
      "index": 306,
      "isChecked": false
    }
  ],
  "systems": [
    {
      "name": "Модуль интеграции \"Стрелец-Интеграл\" INS-SS-SI",
      "article": "01",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-si",
      "index": 401,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Рубеж-Global\" INS-SS-GL",
      "article": "02",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-gl",
      "index": 402,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции СОТС и ПС \"Орион-Про\" INS-SS-OP",
      "article": "03",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-op",
      "index": 403,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Vista\" INS-SS-VI",
      "article": "04",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-vi",
      "index": 404,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Guarto\" INS-SS-GU",
      "article": "05",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-gu",
      "index": 405,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"RusGuard\" INS-SS-RG",
      "article": "11",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-rg",
      "index": 406,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"РК2-К\" INS-SS-RK",
      "article": "12",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-rk",
      "index": 407,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"PARSEC\" INS-SS-PRS",
      "article": "13",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-prs",
      "index": 408,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"WinPak\" INS-SS-WP",
      "article": "14",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-wp",
      "index": 409,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции терминалов распознавания лиц \"R20-Face\" INS-SS-R20",
      "article": "15",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-r20",
      "index": 410,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"ру-скоп\" и \"ру-портер\" INS-SS-GK",
      "article": "21",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-gk",
      "index": 411,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Интегра-Видео\" INS-SS-IV",
      "article": "22",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-iv",
      "index": 412,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"TRASSIR\" INS-SS-TRS",
      "article": "23",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-trs",
      "index": 413,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Сириус\" INS-SS-SR",
      "article": "31",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-sr",
      "index": 414,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"KeyKeeper\" INS-SS-KK",
      "article": "41",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-kk",
      "index": 415,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"Ecos\" INS-SS-EC",
      "article": "42",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-ec",
      "index": 416,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции \"ЭВС\" INS-SS-EVS",
      "article": "43",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-evs",
      "index": 417,
      "isChecked": false
    },
    {
      "name": "Модуль интеграции системы управления лифтами \"SchindlerPort\" INS-SS-SD",
      "article": "51",
      "price": 350000,
      "description": "Описание модуля",
      "id": "ins-ss-sd",
      "index": 418,
      "isChecked": false
    }
  ]
}
