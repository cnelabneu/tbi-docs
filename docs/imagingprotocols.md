# Here you will find all of our imaging preprocessing protocols and associated github code.

##dcm2bids
We use dcm2bids to organize MRI files. See [internal code here](https://github.com/emmatinney/dcm2bids/tree/main). See [official documentation here](https://unfmontreal.github.io/Dcm2Bids/3.1.1/).
##fmriprep
We use fmriprep to preprocess structural and functional data. See [internal code here](https://github.com/cnelabneu/fmriprep_internal), see instructions on QCing here, and see [official documentation here](https://fmriprep.org/en/stable/index.html).
##dwi
We use MRtrix3 to preprocess DWI data to prepare for traditional (FA) and fixel based analysis. See [internal code here](https://github.com/emmatinney/mrtrix3_dw). See [MRtrix3 documentation here](https://mrtrix.readthedocs.io/en/latest/). 
If you want to use fsl, see [code here](https://github.com/emmatinney/fsl_dti) and (official documenation here)[https://fsl.fmrib.ox.ac.uk/fslcourse/2019_Beijing/lectures/FDT/fdt1.html#pipeline].
If you want to use TBSS to do analysis on DTI data, see [code here](https://github.com/emmatinney/fsl_dti/tbss.sh). Consider using [PALM](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/PALM) to do analyses instead.
If you want to do fixel based analysis, see code for [IGNITE analysis](https://github.com/emmatinney/ignite_fba) here. See [official documentation](https://mrtrix.readthedocs.io/en/0.3.16/workflows/fixel_based_analysis.html).
##asl
We use basil to preprocess ASL data. Here you can find the [internal code](https://github.com/emmatinney/asl) and here you can find more information from the [BASIL wiki](https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/BASIL).
#structure function coupling
If you want to use dwi and fmri data to analyze structure function coupling, you will need to preprocess with fmriprep and mrtrix. Then you will need to follow the dwi mrtrix scripts to create a dwi connectome. We use conn to get a connectome of fmri data. See [code](https://github.com/cnelabneu/wm_connectivity_related_code) to create the dwi connectome and the python scripts to get coupling. 
#Choriod Plexus Segmentation
Probably won't do this anymore for TBI but if you want to use Gausian mixture modeling to get ChP segmentation, See [original paper](https://content.iospress.com/articles/journal-of-alzheimers-disease/jad190706) and [code here](https://github.com/EhsanTadayon/choroid-plexus-segmentation). See our [internal code here](https://github.com/emmatinney/ChP_GMM). You will need to run freesurfer or fmriprep first.
