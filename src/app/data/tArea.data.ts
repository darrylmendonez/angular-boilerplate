import { ITArea, IDisease, ITrials, ICompoundInfo } from '../models/trial.model';

export const CompoundInfoData: ICompoundInfo[] = [
  {
    primaryName: 'BI 655130<sup>*</sup>',
    secondaryName: 'Anti-IL-36R mAb'
  },
  {
    primaryName: 'BI 655130<sup>*</sup>',
    secondaryName: 'Anti-IL-36RmAb'
  },
  {
    primaryName: 'BI 655130<sup>*</sup>',
    secondaryName: 'Small-molecule inhibitor'
  },
  {
    primaryName: 'BI 655130<sup>*</sup>',
    secondaryName: 'Anti-IL-36R mAb'
  },
  {
    primaryName: 'BI 655130<sup>*</sup>',
    secondaryName: 'Anti-IL-36RmAb'
  },
  {
    primaryName: 'BI 655064<sup>*</sup><sup>&#0134;</sup>',
    secondaryName: 'Anti-CD40 mAb'
  },
  {
    primaryName: 'Nintedanib<sup>*</sup>',
    secondaryName: 'Tyrosine kinase inhibitor'
  },
  {
    primaryName: 'Nintedanib<sup>*</sup>',
    secondaryName: 'Tyrosine kinase inhibitor'
  }
];

export const TrialsData: ITrials[] = [
  {
    parameterName: 'gpp',
    name: '1368-0013',
    phase: 'II',
    compoundInfo: CompoundInfoData[0],
    details: [
      'N = 27',
      'Phase II, multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with acute moderate to severe generalized pustular psoriasis',
      'Co-primary endpoints:',
      [
        'GPPGA 0 or 1 at Week 1',
        'GPPGA pustulation sub-score of 0 indicating no visible pustules at Week 1'
      ]
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'GPPGA, Generalized Pustular Psoriasis Physician Global Assessment.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03782792 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'ppp',
    name: '1368-0015',
    phase: 'II',
    compoundInfo: CompoundInfoData[1],
    details: [
      'N = 59',
      'Phase IIa, multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with moderate to severe palmoplantar pustulosis',
      'Co-primary endpoints',
      [
        'ppPASI 50 at Week 16',
        'Number of patients with drug-related adverse events at Week 32'
      ],
      'ClinicalTrials.gov identifier: NCT03135548; EudraCT No.: 2016-004573-40'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ppPASI, Palmoplantar Pustular Psoriasis Area and Severity Index',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03135548 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'pso',
    name: '1407-0030',
    phase: 'II',
    compoundInfo: CompoundInfoData[2],
    details: [
      'N = 180',
      'Phase II, randomized, double-blind, placebo-controlled study',
      'Patients with chronic moderate to severe plaque psoriasis (with or without psoriatic arthritis)',
      'Co-primary endpoints',
      [
        'PASI 75 at Week 12',
        'sPGA score of clear/almost clear at Week 12'
      ],
      'ClinicalTrials.gov identifier: NCT03635099'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03635099 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'uc1',
    name: '1368-0004',
    phase: 'II',
    compoundInfo: CompoundInfoData[3],
    details: [
      'N = 10',
      'Open-label, exploratory study',
      'Primary endpoint: Change in gene expression through Week 12',
      'ClinicalTrials.gov identifier: NCT03100864; EudraCT No.: 2017-000100-20'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03100864 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'uc2',
    name: '1368-0005',
    phase: 'II/III',
    compoundInfo: CompoundInfoData[3],
    details: [
      'N = 550',
      'Multicenter, randomized, double-blind, placebo-controlled study',
      [
        'Phase II: Proof-of-concept study of BI 655130* in patients with moderate to severly active ulcerative colitis who have failed previous treatments to identify efficacious and safe dose regimens',
        'Phase III: Confirm efficacy and safety of BI 655130<sup>*</sup> in patients with moderate to severly active ulceritis colitis who have failed previous biologic regimens'
      ],
      'Primary endpoint: Proportion of patients with clinical remission at Week 23',
      'ClinicalTrials.gov identifier: NCT03482635; EudraCT No.: 2017-004230-28'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03482635 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'uc3',
    name: '1368-0010',
    phase: 'II',
    compoundInfo: CompoundInfoData[3],
    details: [
      'N = 150',
      'Multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with lupus nephritis who have achieved a CRR or a PRR or proteinuria <u><</u> 1 g/day (or urine protein/creatine ratio <u><</u> 1) in NCT02770170',
      'Primary endpoint: Proportion of patients with CRR and without any renal flares at Week 52',
      'ClinicalTrials.gov identifier: NCT03385564; EudraCT No.: 2017-003101-17'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      '<sup>&#0134;</sup>BI 655064 is part of a collaboration with AbbVie; Boehringer Ingelheim is currently responsible for the clinical development and AbbVie may elect to advance the program after completion of certain undisclosed clinical achievements.',
      'CRR, complete renal response.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03385564 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'cd',
    name: '1368-0008',
    phase: 'II',
    compoundInfo: CompoundInfoData[4],
    details: [
      'N = 28',
      // tslint:disable-next-line:max-line-length
      'Randomized, double-blind, placebo-controlled study of the mechanism of action and clinical effect of BI 655130* in patients with fistulizing Crohn\'s disease',
      'Primary endpoint: Total number of deregulated genes at Week 4',
      'ClinicalTrials.gov identifier: NCT03752970; EudraCT No.: 2017-003090-34'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      'This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ppPASI, Palmoplantar Pustular Psoriasis Area and Severity Index',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT03752970 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'ln1',
    name: '1293-0010',
    phase: 'II',
    compoundInfo: CompoundInfoData[5],
    details: [
      'N = 120',
      'Multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with active lupus nephritis',
      'Primary endpoint: Proportion of patients with CRR at Week 52',
      'ClinicalTrials.gov identifier: NCT02770170; EudraCT No.: 2015-001750-15'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      // tslint:disable-next-line:max-line-length
      '&#x271D;BI 655064 is part of a collaboration with AbbVie; Boehringer Ingelheim is currently responsible for the clinical development and AbbVie may elect to advance the program after completion of certain undisclosed clinical achievements.',
      'CRR, complete renal response',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT02770170 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'ln2',
    name: '1293-0013',
    phase: 'II',
    compoundInfo: CompoundInfoData[5],
    details: [
      'N = 120',
      'Multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with active lupus nephritis',
      'Primary endpoint: Proportion of patients with CRR at Week 52',
      'ClinicalTrials.gov identifier: NCT02770170; EudraCT No.: 2015-001750-15'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      // tslint:disable-next-line:max-line-length
      '&#x271D;BI 655064 is part of a collaboration with AbbVie; Boehringer Ingelheim is currently responsible for the clinical development and AbbVie may elect to advance the program after completion of certain undisclosed clinical achievements.',
      'CRR, complete renal response',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT02770170 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'ssc-ild',
    name: '1199-0214A',
    phase: 'III',
    compoundInfo: CompoundInfoData[6],
    details: [
      'SENSCIS (N = 520)',
      '52-week, multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with systemic sclerosis-associated interstitial lung disease',
      'Primary endpoint: Annual rate of decline in forced vital capacity at Week 52',
      'ClinicalTrials.gov identifier: NCT02597933; EudraCT No.: 2015-000392-28'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT02597933 (Accessed 17 January 2019)'
    ]
  },
  {
    parameterName: 'pf-ild',
    name: '1199-0247',
    phase: 'III',
    compoundInfo: CompoundInfoData[7],
    details: [
      'INBUILD (N = 663)',
      '52-week, multicenter, randomized, double-blind, placebo-controlled study',
      'Patients with progressive fibrosing interstitual disease',
      'Primary endpoint: Annual rate of decline in forced vital capacity at Week 52',
      'ClinicalTrials.gov identifier: NCT02999178; EudraCT No.: 2015-003360-37'
    ],
    footnotes: [
      // tslint:disable-next-line:max-line-length
      '*This compound is an investigational agent in the therapeutic focus area(s) and is not approved. Its safety and efficacy have not been established.',
      'ClinicalTrials.gov. Available at: https://www.clinicaltrials.gov/ct2/show/NCT02999178 (Accessed 17 January 2019)'
    ]
  }
];

export const DiseaseData: IDisease[] = [
  {
    parameterName: 'gpp',
    primaryName: 'GPP',
    secondaryName: 'Generalized Pustular Psoriasis',
    trials: [TrialsData[0]]
  },
  {
    parameterName: 'ppp',
    primaryName: 'PPP',
    secondaryName: 'Palmoplantar Pustulosis',
    trials: [TrialsData[1]]
  },
  {
    parameterName: 'pso',
    primaryName: 'PsO',
    secondaryName: 'Psoriasis',
    trials: [TrialsData[2]]
  },
  {
    parameterName: 'uc',
    primaryName: 'UC',
    secondaryName: 'Ulcerative Colitis',
    trials: [TrialsData[3], TrialsData[4], TrialsData[5]]
  },
  {
    parameterName: 'cd',
    primaryName: 'CD',
    secondaryName: 'Crohn\'s Disease',
    trials: [TrialsData[6]]
  },
  {
    parameterName: 'ln',
    primaryName: 'LN',
    secondaryName: 'Lupus Nephritis',
    trials: [TrialsData[7], TrialsData[8]]
  },
  {
    parameterName: 'ssc-ild',
    primaryName: 'SSc-ILD',
    secondaryName: 'Systemic Scierosis-Associated Interstitial Lung Disease',
    trials: [TrialsData[9]]
  },
  {
    parameterName: 'pf-ild',
    primaryName: 'PF-ILD',
    secondaryName: 'Progressive Fibrosing Interstitial Lung Disease',
    trials: [TrialsData[10]]
  }
];

export const TAreaData: ITArea[] = [
  {
    name: 'Dermatology',
    diseases: [DiseaseData[0], DiseaseData[1], DiseaseData[2]]
  },
  {
    name: 'Gastroenterology',
    diseases: [DiseaseData[3], DiseaseData[4]]
  },
  {
    name: 'Rheumatology',
    diseases: [DiseaseData[5]]
  },
  {
    name: 'Pulmonology',
    diseases: [DiseaseData[6], DiseaseData[7]]
  }
];
