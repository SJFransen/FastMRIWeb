---
pageClass: research
title: S. J. Fransen, et al. (2023a)
---
# A multicenter validation of prediction uncertainty to triage patients for prostate cancer AI diagnosis

## 📚 Citation
S. J. Fransen, J. S. Bosma, N. Alves, C. Roest, Q. Y. van Lohuizen, T. C. Kwee, D. Yakar, and H. Huisman, "A multicenter validation of prediction uncertainty to triage patients for prostate cancer AI diagnosis", _Annual Meeting of the Radiological Society of North America_, 2023.

## 📖 Abstract
*Purpose*: : AI prediction uncertainty can identify cases at risk of AI failure, enabling reliable automatic AI triaging. This study validates an uncertainty-based triage for prostate cancer patients, to improve diagnostic accuracy of AI and improve the clinical workflow.

*Materials and Methods*: A multi-center dataset of patients undergoing MRI triage for prostate cancer and an existing state-of-the-art AI algorithm for prostate cancer detection was used. The algorithm was previously trained on 7756 prostate bpMRI examinations (T2, ADC, and high b-value DWI) from Institute A (Siemens scanner) and provides 15 heatmaps with voxel-level likelihoods of malignant tissues (PIRADS≥4). The trained algorithm was used to predict 561 unseen cases from Institute B (Philips scanner) and 200 unseen cases from Institute C (Siemens scanner). The variability in patient-level likelihood scores was used to measure prediction uncertainty. Predictions with a low variability were considered certain whereas predictions with a high variability were considered uncertain, at risk of AI failure. Multiple splits (20%, 40%, 60%, and 80%) were used to make certain and uncertain groups. The ability of AI to triage patients was assessed by comparing the AUROC of certain cases with uncertain cases. Furthermore, a comparison was made with the radiologist by comparing the true positive rate (TPR) of certain cases and the TPR of the radiologist at the false positive rate (FPR) operating point of the radiologist. Statistical significance was assessed by using DeLong’s test.
 
*Results*: AUROC of AI prediction was significantly higher for certain cases compared to uncertain cases, in both test sets up to 40% AI diagnosis (p<0.05). The highest AI performance was achieved by only selecting the 20% most certain cases (0.85 AUROC Institute B, 0.97 AUROC Institute C), indicating that AI prediction with a high level of certainty is more reliable. Compared to the overall radiologist performance, the AI can predict with a higher sensitivity in 20% of the cases from institute B (0.96 vs. 0.87 TPR at 0.45 FPR) and 60% of the cases from institute C (0.98 vs. 0.96 TPR at 0.22 FPR).

*Conclusion*: Prediction uncertainty can triage patients for which AI diagnosis is reliable and identify patients at risk of AI failure in external test sets including other MRI vendors. This technique could improve the clinical workflow by implementing AI diagnosis for cases with high certainty, while only redirecting patients at risk of AI failure to a radiologist worklist for reporting.

*Clinical Relevance*: AI detection for prostate cancer approaches expert-level performance, making automatic patient triaging possible. Using AI prediction uncertainty enables a reliable selection of patients fit for AI diagnosis
