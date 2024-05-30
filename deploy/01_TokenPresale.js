module.exports = async function ( { deployments, getNamedAccounts } ) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log( `>>> your address: ${ deployer }` );

  const tokenAddress = "0x27f7716f8ad3423Af195E67C715BAAc030e4A955", USDCAddress = "0x3CE4c10D6CA1E46Fe66591AFc1968f995a9208EA";
  await deploy( "Presale", {
    from: deployer,
    args: [ tokenAddress, USDCAddress ],
    log: true,
    waitConfirmations: 3,
    skipIfAlreadyDeployed: true,
  } );
  await hre.run( "verifyContract", { contract: "Presale" } );
};

module.exports.tags = [ "Presale" ];
