---
pageClass: research
title: J. S. Bosma, et al. (2023a)
---
# Reproducibility of Training Deep Learning Models for Medical Image Analysis

## 📚 Citation
J. S. Bosma, D. Peeters, N. Alves, A. Saha, Z. Saghir, C. Jacobs, and H. Huisman, "Reproducibility of Training Deep Learning Models for Medical Image Analysis", _Medical Imaging with Deep Learning_, in _Proceedings of Machine Learning Research_ 227:1269-1287, 2023.

<ActionButton action="This paper is open access!" link="https://proceedings.mlr.press/v227/bosma24a.html" />

## 📖 Abstract
Performance of deep learning algorithms varies due to their development data and training method, but also due to several stochastic processes during training. Due to these random factors, a single training run may not accurately reflect the performance of a given training method. Statistical comparisons in literature between different deep learning training methods typically ignore this performance variation between training runs and incorrectly claim significance of changes in training method. We hypothesize that the impact of such performance variation is substantial, such that it may invalidate biomedical competition leaderboards and some scientific papers. To test this, we investigate the reproducibility of training deep learning algorithms for medical image analysis. We repeated training runs from prior scientific studies: three diagnostic tasks (pancreatic cancer detection in CT, clinically significant prostate cancer detection in MRI, and lung nodule malignancy risk estimation in low-dose CT) and two organ segmentation tasks (pancreas segmentation in CT and prostate segmentation in MRI). A previously published top-performing algorithm for each task was trained multiple times to determine the variance in model performance. For all three diagnostic algorithms, performance variation from retraining was significant compared to data variance. Statistically comparing independently trained algorithms from the same training method using the same dataset should follow the null hypothesis, but we observed claimed significance with a p-value below 0.05 in 15% of comparisons with conventional testing (paired bootstrapping). We conclude that variance in model performance due to retraining is substantial and should be accounted for.
