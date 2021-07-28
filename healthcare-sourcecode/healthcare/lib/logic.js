/**
 * Add new perscription
 * @param {org.mt.healthcare.AddPrescription} asset
 * @transaction
 */
async function addPerscription(asset) {
    let assetRegistry = await getAssetRegistry('org.mt.healthcare.Prescription');
    var factory = getFactory()

    num_id = (Math.floor(Math.random() * ( 999999 - 100000) + 100000)).toString(10)

    var currentDate = new Date();

    var assetID = asset.patient.id + num_id;
    var newAsset = factory.newResource('org.mt.healthcare', 'Prescription', assetID)
    newAsset.patient = asset.patient;
    newAsset.provider = asset.patient.provider;
    newAsset.drugName = asset.drugName;
    newAsset.timeCreated = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
    newAsset.active = true;

    await assetRegistry.add(newAsset)
}

/**
 * Risk Analysis
 * @param {org.mt.healthcare.UpdateRiskAnalysis} asset
 * @transaction
 */
async function updateRiskAnalysis(asset) {
    let assetRegistry = await getAssetRegistry('org.mt.healthcare.RiskAnalysis');
    let score = 0.0

    if (asset.riskAnalysis.diabetes) {
        score += 1
    }

    if (asset.riskAnalysis.smoker) {
        score += 2
    }

    if (asset.riskAnalysis.obesity) {
        score += 1.5
    }

    if (asset.riskAnalysis.alcohol) {
        score += 2
    }

    asset.riskAnalysis.riskAnalysisScore = score

    assetRegistry.update(asset.riskAnalysis)

}
